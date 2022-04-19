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
     * @Route("/api/nouveautes", name="last_products", methods={"GET"})
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
     * @Route("/api/catalogue/{category}", name="liste_products", methods={"GET"})
     */
    public function getProductsCatalogue(ProductRepository $productRepository, $category): JsonResponse
    {

        $products = $productRepository->findBy(['category' => $category]);

        return $this->json(
            $products,
            200,
            [],
            ['groups' => 'liste_products']
        );
    }

    /**
     * @Route("/api/tout", name="liste_all_products", methods={"GET"})
     */
    public function getAllProducts(ProductRepository $productRepository): JsonResponse
    {

        $products = $productRepository->findAll();

        return $this->json(
            $products,
            200,
            [],
            ['groups' => 'liste_products']
        );
    }

    /**
     * @Route("/api/product/{id}", name="product", methods={"GET"})
     */
    public function getProductsCat(ProductRepository $productRepository, $id): JsonResponse
    {

        $products = $productRepository->findBy(['id' => $id]);

        return $this->json(
            $products,
            200,
            [],
            ['groups' => 'detail_product']
        );
    }


    // /**
    //  * @Route("/catalogue/{category}/{page}", name="liste_products", methods={"GET"}, requirements={"page"="\d+"})
    //  */
    // public function getProducts(ProductRepository $productRepository, Request $request): JsonResponse
    // {
    //     $category = $request->query->get('category', 'tout');

    //     $total = $productRepository->getNombreTotalProducts($category);

    //     $products = $productRepository->getPaginatedProducts($request->query->getInt('page', 1), self::NB_PRODUCTS_PAR_PAGE, $category);

    //     return $this->json(
    //         ["products" => $products, "total" => $total, "limit" => self::NB_PRODUCTS_PAR_PAGE],
    //         200,
    //         [],
    //         ['groups' => 'liste_products']
    //     );
    // }
}
