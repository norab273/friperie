<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(["liste_products", "detail_product"])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(["liste_products", "detail_product"])]
    private $name;

    #[ORM\Column(type: 'integer')]
    #[Groups(["liste_products", "detail_product"])]
    private $price;

    #[ORM\Column(type: 'string', length: 1000)]
    #[Groups(["liste_products", "detail_product"])]
    private $photo;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(["liste_products", "detail_product"])]
    private $category;

    #[ORM\Column(type: 'string', length: 10000, nullable: true)]
    #[Groups("detail_product")]
    private $description;


    #[ORM\Column(type: 'string', length: 255)]
    #[Groups("detail_product")]
    private $size;


    #[ORM\Column(type: 'date')]
    private $date;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(string $photo): self
    {
        $this->photo = $photo;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getSize(): ?string
    {
        return $this->size;
    }

    public function setSize(string $size): self
    {
        $this->size = $size;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getFavorites(): ?bool
    {
        return $this->favorites;
    }

    public function setFavorites(bool $Favorites): self
    {
        $this->Favorites = $favorites;

        return $this;
    }
}