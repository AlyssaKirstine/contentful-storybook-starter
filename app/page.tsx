import HeroModule from "@/components/heroModule";

export default function Home() {
  return (
    <main className="bg-white">
      <HeroModule
        header="Marketing websites made easy"
        body="Combining the power of Storybook and Contentful unlocks a seamless and efficient workflow, empowering developers and content creators to effortlessly collaborate and deliver captivating user experiences with pixel-perfect precision and dynamic content integration."
        image="/heroImage.jpg"
        button={{
          text: "Open tutorial",
          href: "https://medium.com/@alyssakirstine",
        }}
      />
    </main>
  );
}
