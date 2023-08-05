<script>
    import { router } from "tinro";
    import Navbar from "./lib/navbar.svelte";
    import Footer from "./Footer.svelte";
  </script>
  
  <Navbar />
  <main class="h-screen bg-blue-100 bg-cover">
   <section class="hero-content items-center text-center">

      <div class=" pt-7 grid grid-cols-1 ">
        <!-- <img alt="Hubs" src="codehubs-removebg-preview.png" style="height: 120px" /> -->
        <h1 class="text-4xl font-extrabold">About Hubs</h1>
       

        <div class="mt-9 shadow-black/40 shadow-2xl text-m text-gray-900 dark:text-white">
          <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="codehubs-removebg-preview.png" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal">

                <p class="mb-3 text-start font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </a>
        </div>
        <div>
        <button
        class="btn mt-8 shadow-black/50 shadow-2xl"
        on:click={async () => {
          window.scrollTo(0, 0);
          router.goto("/explore");
        }}>Explore</button
      >
      </div>
      </div>
      
    <section>
      
</main>