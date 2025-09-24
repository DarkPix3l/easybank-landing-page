import Article from "../ui/Article";

function Blog() {
  return (
<section id="blog" aria-label="blog section" className="bg-gray-200 py-[6%] scroll-m-[100px]">
  <div className="max-w-[85%] mx-auto">
    <h2 className="text-dark-blue font-normal text-center xl:text-left">Latest Articles</h2>
    <div className="article-container grid gap-[26px] grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mt-[30px] md:grid-cols-2">
        <Article
          image="/images/image-currency.jpg"
          alt="image of money with different currency"
          author="Claire Robinson"
          title="Receive money in any currency with no fees"
          summary="The world is getting smaller and we&rsquo;re becoming more mobile. So why should you be forced to only receive money in a single &hellip;"
        />
        <Article
          image="/images/image-restaurant.jpg"
          alt="image of a delicious main course"
          author="Wilson Hutton"
          title="Treat yourself without worrying about money"
          summary="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you &hellip;"
        />
        <Article
          image="/images/image-plane.jpg"
          alt="image of an amazing plane view"
          author="Wilson Hutton"
          title="Take your Easybank card wherever you go"
          summary="We want you to enjoy your travels. This is why we don&rsquo;t charge any fees on purchases while you&rsquo;re abroad. We&rsquo;ll even show you &hellip;"
        />
        <Article
          image="/images/image-confetti.jpg"
          alt="image of colored confetti with a sky blue background"
          author="Claire Robinson"
          title="Our invite-only Beta accounts are now live!"
          summary="After a lot of hard work by the whole team, we&rsquo;re excited to launch our closed beta. It&rsquo;s easy to request an invite through the site &hellip;"
        />
    </div>
  </div>
</section>
  );
}

export default Blog;
