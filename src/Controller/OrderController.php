<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Product;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class OrderController extends AbstractController {

    /**
     * @Route("/api/ordertotalamount", name="order_total_amount", methods={"GET"})
     */
    public function getOrderTotalAmount(Product $product) {
        $price = $product->getPrice();

        dd($price);
    }
}

