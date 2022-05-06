<?php

namespace App\Cart;

use App\Repository\ProductRepository;
use Doctrine\DBAL\Driver\OCI8\Exception\Error as ExceptionError;
use Error;
use Symfony\Component\HttpFoundation\RequestStack;

class CartService {

    protected $requestStack;
    protected $productRepository;

    public function __construct(RequestStack $requestStack, ProductRepository $productRepository)
    {
        $this->requestStack = $requestStack;
        $this->productRepository = $productRepository;
    }

    public function add(int $id) {

        $session = $this->requestStack->getSession();
        $cart = $session->get('cart',[]);

        if(array_key_exists($id, $cart)) {
            dd('le produit est déjà dans le panier');
        }   
        
        $cart[$id] = 1;

        $session->set('cart', $cart);
        
        return $session;
    }

    public function getTotal() : int {

        $session = $this->requestStack->getSession();
        $total = 0;

        foreach ($session->get('cart', []) as $id=>$qty)
        {
            $product = $this->productRepository->find($id);

            $total += $product->getPrice() * $qty;
        }

        return $total;
    }

    public function getDetailedCartItems() : array
    { 
        $session = $this->requestStack->getSession();
        $detailedCart = [];


        foreach ($session->get('cart', []) as $id => $qty)
        {
            $product = $this->productRepository->find($id);
        
            $detailedCart[] = [
                'product' => $product,
                'quantity' => $qty
            ];
        }

        return $detailedCart;
    }
}