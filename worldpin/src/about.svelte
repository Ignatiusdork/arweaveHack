<script>
  import { router } from "tinro";
  import Navbar from "./lib/navbar.svelte";
  import Footer from "./Footer.svelte";
</script>

<Navbar />
<main class="h-screen  bg-cover">
  <section class="hero-content items-center ml-20 text-center">
    <div class=" pt-7 grid grid-cols-1">
      <!-- <img alt="Hubs" src="codehubs-removebg-preview.png" style="height: 120px" /> -->
      <h1 class="text-4xl font-extrabold">PinPoint Earth</h1>

      <div
        class="mt-9 shadow-black/40 shadow-2xl text-m text-gray-900 dark:text-white"
      >
        <a
          href="/about"
          class="flex flex-col items-center bg-black border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-cover w-full rounded-t-lg h-20 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="codehubs-removebg-preview.png"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <p
              class="mb-3 text-start font-normal text-gray-600 dark:text-gray-400"
            >
            PinPoint Earth is an innovative web dAPP built on the Arweave blockchain and utilizing the Arweavekit, designed to help users explore,
            navigate, and interact with the world around them. 
            <br>
            <br>
            The app leverages advanced mapping technology and location-based services to provide a wide range of features and functionalities.<br>
            Using common web development toolkits and graphql on Arweave development platform, you can build completely decentralized
            applications that are deployed on the permaweb forever.
            <br>
            <br>Keep in touch with Arweave<a 
            class="underline"
            href="https://twitter.com/onlyarweave">@onlyarweave</a
            ><br>
            <br>
            Follow for updates and announcements to more information
            about Arweave.
            </p>

          </div>
        </a>
      </div>
      <div>
        <button
          class="btn mt-8 mb-5 bg-slate-500 hover:bg-red-200 shadow-black/70 shadow-2xl"
          on:click={async () => {
            window.scrollTo(0, 0);
            router.goto("/explore");
          }}>Explore</button
        >
      </div>
    </div>

    <section />
  </section>
</main>
