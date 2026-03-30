import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../../../components/ui/button';

export const FeatureSection = () => {
  return (
    <section className="container bg-gray-700 grid gap-6 md:grid-cols-2 pb-8 pt-8 md:py-10">
      <div className="flex flex-col gap-4 rounded-lg p-6 bg-gray-500 md:p-12">
        <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase">
          Simples
        </span>
        <h2 className="font-sans text-gray-100 text-heading-lg">
          Crie um catálogo de produtos online em poucos minutos
        </h2>
      </div>

      <div className="flex flex-col gap-4 rounded-lg p-6 bg-gray-500 md:p-12">
        <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase">
          Prático
        </span>
        <h2 className="font-sans text-gray-100 text-heading-lg">
          Venda para seu público através de uma plataforma única
        </h2>
      </div>

      <div className="col-span-full flex flex-col gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 rounded-lg bg-gray-500 p-6 md:p-12">
          <div className="flex flex-col gap-4">
            <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase">
              Personalizável
            </span>

            <h2 className="font-sans text-gray-100 text-heading-lg">
              Tenha uma loja online personalizada com a cara da sua marca
            </h2>

            <Button
              asChild
              className="w-fit rounded-full hidden mt-4 md:mt-auto md:flex"
            >
              <Link href="/criar-loja">
                Criar loja grátis
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-md overflow-hidden">
              <Image
                src="/feature-section.svg"
                alt="Features"
                width={440}
                height={330}
                className="object-contain w-full"
              />
            </div>
            <Button
              asChild
              className="w-full gap-2 rounded-full mt-4 md:mt-auto md:hidden"
            >
              <Link href="/criar-loja">
                Criar loja grátis
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
