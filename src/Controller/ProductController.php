<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
// use OpenApi\Annotations as OA;

class ProductController extends AbstractController
{
    const NB_PRODUCTS_PAR_PAGE = 3;

    /**
     * @Route("/nouveautes", name="last_products", methods={"GET"})
     */
    public function getProductsLast(ProductRepository $productRepository, Request $request): JsonResponse
    {

        $products = $productRepository->findBy(
            [],
            ['date' => 'DESC'],
            2
        );

        return $this->json(
            $products,
            200,
            ['Access-Control-Allow-Origin' => '*'],
            ['groups' => 'liste_products']
        );
    }

    /**
     * @Route("/catalogue", name="liste_products", methods={"GET"})
     */
    public function getProducts(ProductRepository $productRepository, Request $request): JsonResponse
    {
        $category = $request->query->getInt('category');
        // dd($category);

        $total = $productRepository->getNombreTotalProducts($category);

        $products = $productRepository->getPaginatedProducts($request->query->getInt('page', 1), self::NB_PRODUCTS_PAR_PAGE, $category);

        return $this->json(
            ["products" => $products, "total" => $total, "limit" => self::NB_PRODUCTS_PAR_PAGE],
            200,
            [],
            ['groups' => 'liste_products']
        );
    }
}
