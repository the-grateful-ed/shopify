import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShopifyProduct } from "@/types";
import { formatPrice } from "@/utils/format-price";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: ShopifyProduct;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const prodId = product.id.split("/").pop();

  return (
    <Card className="lg:max-w-md w-full" key={product.id}>
      <CardHeader>
        <CardTitle></CardTitle>
      </CardHeader>
      <CardContent className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-background group-hover:opacity-75 lg:aspect-none lg:h-80">
        <Image
          src={product.featuredImage.url}
          alt={product.featuredImage.altText}
          width={product.featuredImage.width}
          height={product.featuredImage.height}
          className="h-96 w-full object-cover"
          placeholder="blur"
          blurDataURL={product.featuredImage.url}
        />
      </CardContent>
      <CardFooter className="group relative border-primary-foreground border-2 hover:border-primary/10 rounded-xl overflow-hidden p-1.5">
        <CardDescription className="mt-4 flex flex-col justify-between">
          <h3 className="text-sm text-gray-700">
            <Link href={`/product/${prodId}`}>
              <span
                aria-hidden="true"
                className="absolute inset-0 overflow-hidden"
              />
              {product.title}
            </Link>
          </h3>
          <p className="text-sm font-medium text-gray-900">
            {formatPrice(product.priceRangeV2.minVariantPrice.amount)}{" "}
            {product.priceRangeV2.minVariantPrice.currencyCode}
          </p>
        </CardDescription>
      </CardFooter>
    </Card>
  );
};
