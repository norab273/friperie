<?php

namespace App\Controller;

use App\Cart\CartService;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class CartController extends AbstractController
{

    /**
     * @Route("/api/cart/add/{id}", name="cart_add", requirements={"id":"\d+"})
     */
    public function add(int $id, ProductRepository $productRepository, CartService $cartService): void
    {
        $product = $productRepository->find($id);

        if(!$product) {
            throw $this->createNotFoundException("Le produit $id n'existe pas");
        }

        $cartService->add($id);
    }

    /**
     * @Route("/api/cart", name="cart_show")
     */

    public function show(CartService $cartService): JsonResponse 
    {
        $detailedCart = $cartService->getDetailedCartItems();

        $total = $cartService->getTotal();

        return $this->json(
            ['detailedCart' => $detailedCart, 'total' => $total],
            200,
            [],
            ['groups' => 'detail_product']
    
        );
    }
}

