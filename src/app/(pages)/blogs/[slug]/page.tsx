import { Button } from "@/components/ui/button";
import Image from "next/image";
import Head from "next/head";
import { FC } from "react";

interface BlogMetadata {
  title: string;
  category: string;
  date: string;
  time: string;
  imageUrl: string;
}

const blogData: BlogMetadata = {
  title: "The Psychology of Eyeglasses: What Your Frames Say About You",
  category: "Eyeglasses",
  date: "3 February 2025",
  time: "10:00 AM",
  imageUrl: "/sampleBlog.jpg",
};

const SingleBlog: FC = () => {
  return (
    <>
      <Head>
        <title>{blogData.title} | Eyewear Insights</title>
        <meta
          name="description"
          content="Discover how different eyewear styles impact first impressions and self-perception."
        />
      </Head>
      <div className="w-full min-h-screen px-5 py-10 md:px-10 lg:px-16">
        {/* Blog Header */}
        <header className="w-full flex flex-col md:items-center md:text-center gap-4">
          <Button variant="outline" className="w-max">
            {blogData.category}
          </Button>
          <h1 className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] text-3xl md:text-5xl font-bold">
            {blogData.title}
          </h1>
          <div className="text-gray-600 flex gap-4 items-center">
            <p>{blogData.date}</p>
            <span className="h-3 w-3 rounded-full bg-gray-300"></span>
            <p>{blogData.time}</p>
          </div>
        </header>

        {/* Blog Image */}
        <div className="w-full my-10 h-60 md:h-96 xl:h-[70vh] rounded-2xl overflow-hidden">
          <Image
            src={blogData.imageUrl}
            alt={blogData.title}
            width={1200}
            height={700}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <main className="flex flex-col md:flex-row it ems-center justify-center gap-6">
          {/* Blog Content */}
          <article className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] flex flex-col gap-8">
            <section className="flex flex-col gap-4 mt-10">
              <h2 className="text-3xl font-semibold">Introduction</h2>
              <p className="text-base text-gray-800 font-light leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem, laborum enim error nemo tenetur corporis ipsum
                accusantium dolor, expedita cum odio non vero ex vel id,
                pariatur praesentium magnam! Neque voluptas tenetur ducimus
                quidem ipsum sequi, ex nobis tempora porro eius facere tempore
                fugit unde, magni veniam vero sint ut dicta in temporibus earum!
                Voluptate, ipsam ad ullam ipsum officiis soluta magnam
                perferendis enim, quo architecto quis corporis. Delectus sequi
                est, officiis, ratione aperiam vitae cupiditate aspernatur
                veniam debitis voluptatem earum dicta velit ea deleniti
                temporibus dolor dignissimos suscipit repellendus porro quasi
                quam similique praesentium reiciendis! Numquam, qui odio error
                magni expedita dicta vitae cupiditate velit alias ea sint
                perspiciatis in dolorum, voluptates reiciendis facilis iusto
                eligendi officia eaque similique tenetur repellat corporis ipsa
                tempora? Impedit, iusto est. Necessitatibus saepe fugiat iste
                sunt praesentium consequatur quos dignissimos quidem ratione
                voluptatibus facilis, nam accusantium at ex sapiente assumenda
                et, aspernatur molestias amet temporibus eos sequi quaerat
                deserunt! Labore recusandae, quas reiciendis veniam ducimus
                illum, ratione, accusamus harum deserunt doloremque magni
                provident odit blanditiis. Quasi nemo vitae sed quod minus
                facilis neque non itaque dolorum eum autem maiores quia aperiam,
                ipsam delectus consequatur temporibus velit optio. Ipsum, error?
                Exercitationem, libero aut? Eaque, placeat minima. Nemo iure
                magni deleniti labore in cum ipsum commodi, dolore perspiciatis
                cupiditate eveniet debitis. Expedita ad nemo consequatur quis,
                dignissimos consequuntur repudiandae in recusandae
                exercitationem, eligendi modi ullam quae quos ex nesciunt
                deserunt praesentium? Molestiae est ratione et molestias cum
                quisquam earum beatae, alias quas explicabo nemo, voluptatem
                voluptates atque corporis necessitatibus accusamus officia.
                Dolor tenetur repudiandae suscipit facere possimus eligendi,
                delectus atque animi asperiores commodi ipsum amet ut cumque
                veritatis a expedita libero deserunt, maiores alias? Explicabo
                repellat neque dolorem, ea qui voluptates nam quam. Maiores
                suscipit labore officiis minima consequuntur! Non nesciunt
                consequuntur, quibusdam ipsam pariatur numquam qui dolor nostrum
                aspernatur dignissimos ratione doloribus. Laborum praesentium,
                vitae aliquid id fugit consequuntur blanditiis cupiditate
                explicabo veniam eaque voluptatem impedit quae possimus quas
                autem obcaecati porro veritatis! Placeat suscipit voluptatibus
                harum tempora? Dolorem nemo possimus ex! Iusto vero itaque et in
                deleniti sapiente fuga. Illum neque commodi illo quisquam,
                quaerat veniam delectus autem consectetur incidunt ut non
                facilis perferendis odio nam eius aspernatur aliquam similique
                saepe totam quas veritatis? Perferendis debitis sint in culpa
                excepturi accusantium recusandae est at cupiditate nostrum alias
                voluptatum fugit tempora velit atque omnis harum earum, quis
                officia voluptate eius ratione veniam optio accusamus. Fugit
                dolores consequatur, quos provident mollitia a earum ea, sed
                magni expedita officiis. Voluptates, illum veritatis! Fugiat
                eaque, iste voluptas eos quibusdam autem, aliquam veniam
                asperiores explicabo repellendus doloremque magni et quod nobis
                incidunt commodi eveniet alias porro! Incidunt, architecto ipsa,
                quidem provident vero fuga voluptate mollitia quo quia iste ut
                voluptatibus ducimus cum eligendi veritatis amet dignissimos
                debitis sapiente nesciunt rem corrupti nulla. Laboriosam libero
                corrupti, amet enim autem quas eligendi recusandae quo quia et
                ut repellat accusantium nemo? Possimus vitae est repudiandae
                ipsum delectus impedit tempora? Explicabo, tenetur vel! Eveniet
                iusto exercitationem quisquam debitis ad provident aliquid
                maxime maiores nisi quam, cupiditate omnis, praesentium vitae
                eos, sunt ex a numquam nesciunt! Dolorem, veritatis, cumque
                accusantium voluptatem iste sit praesentium quo fuga sint nulla
                inventore dicta adipisci modi voluptate quia repudiandae at
                obcaecati doloremque, minima distinctio accusamus libero
                ducimus? Assumenda vitae exercitationem delectus mollitia
                doloremque voluptas dicta, esse ab labore praesentium ipsa nisi
                expedita illum voluptates hic ratione quibusdam quia?
                Perferendis, quaerat distinctio illum aliquid eius optio fuga
                dolor ab facere officiis delectus reprehenderit corporis atque
                quas odio, fugiat blanditiis explicabo laudantium illo sed
                molestias itaque harum consequuntur? Laudantium veritatis in
                praesentium. Tempora possimus nostrum alias quos porro cumque
                vel ullam qui laudantium? Deleniti, voluptatem. Omnis deserunt
                sint, qui delectus odit sed exercitationem, repellendus, labore
                similique quis dolorum fuga optio esse possimus quos! Quis,
                facere veritatis ut atque officia dignissimos quidem nostrum in
                nisi, magni eos adipisci libero architecto incidunt corrupti
                fugit recusandae doloribus aut. Unde placeat accusantium natus
                perspiciatis officiis totam consequatur error quos corrupti? At,
                impedit placeat est deleniti recusandae eaque veritatis ab? A
                enim, quia exercitationem reiciendis veritatis necessitatibus
                fugiat tenetur odit? Officiis dolores libero doloribus possimus
                suscipit beatae alias neque nostrum porro labore repudiandae
                maxime pariatur hic amet ipsa eius voluptatum, quam aliquam.
                Voluptatibus id sapiente soluta nulla placeat suscipit facere?
                Nihil voluptatum dolores est, ipsam nobis quaerat explicabo
                officia aliquid natus, eaque sint doloremque consequatur, totam
                voluptates hic numquam officiis sequi eos? Delectus illum
                repellendus fugiat? Consectetur, nemo eveniet. Accusantium quas
                quibusdam ex quia incidunt sit mollitia id asperiores,
                consectetur ipsa totam optio aspernatur tempora quis similique
                nihil doloribus in voluptates perferendis sint. Iste debitis
                quisquam exercitationem amet soluta ducimus rem quo minima odit
                quam fugit totam in repellendus dignissimos, voluptates error
                illum. Eligendi consectetur et, excepturi deleniti, nisi, ipsam
                molestias fugit cupiditate sed odit laborum ducimus fuga maxime
                voluptas blanditiis itaque enim iste rem vitae porro culpa
                laudantium? Itaque maxime ut excepturi magni, pariatur neque,
                nostrum eaque dolorum ullam corrupti dolor consectetur, labore
                sapiente. Distinctio consequatur asperiores dicta ea officia
                pariatur praesentium nulla molestias modi, quia quaerat maxime
                ipsam voluptatum perferendis vero temporibus reiciendis aliquid
                nisi eum totam et provident. Odit quidem ex blanditiis possimus
                error, corrupti odio sed reprehenderit eius vitae, provident quo
                dolorum? Nisi mollitia corrupti natus corporis eveniet error
                perspiciatis at adipisci, culpa voluptatum quas nihil fuga earum
                accusantium tempora, dolore atque quae hic laborum rem
                repudiandae velit! Odio, ut dolorem adipisci exercitationem
                officia maxime dicta architecto nam eum rerum optio numquam quos
                error blanditiis placeat officiis aliquid accusantium dolore?
                Neque repellendus animi ab consequatur? Doloribus, non harum?
                Sequi nemo itaque blanditiis voluptatem, facilis nam quia
                praesentium reiciendis deleniti incidunt iure aliquam voluptas
                excepturi, animi maiores cumque corporis soluta accusantium
                obcaecati ducimus eveniet. Officiis, sint illum! Rerum
                cupiditate repudiandae aliquam unde sapiente adipisci nesciunt
                labore laudantium perspiciatis! Aperiam mollitia a numquam
                excepturi veritatis deserunt sint hic architecto. Ratione, alias
                inventore. Repellat dicta suscipit quaerat maiores earum
                adipisci magni animi nam molestiae. Optio laboriosam sapiente
                sit amet nulla non cupiditate vitae modi corporis itaque. Non
                possimus doloremque sed corporis sint numquam.
              </p>
            </section>

            {/* Other sections here... */}
          </article>
        </main>
      </div>
    </>
  );
};

export default SingleBlog;
