import Image from "next/image";
import knowledge from '@/public/image/knowledge.png'

export default function Home() {
  return (
    <main className="mt-5">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ullam architecto illo dolores totam ipsum laborum quo veniam. Non nemo, repudiandae dignissimos repellendus libero maiores labore officia sunt distinctio commodi.

     <Image className="mt-10" src={knowledge} alt="knowledge"></Image>
    </main>
  );
}
