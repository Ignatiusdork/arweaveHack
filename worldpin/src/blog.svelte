<script>
    import { router } from "tinro";
    import Navbar from "./lib/navbar.svelte";
    import Footer from "./Footer.svelte";

	let data = {
        blogs: undefined,
        loading: true,
    };

    async function loadData() {
      let temp_data = getAllT
        data.loading = true;
        const response = await fetch('https://swapi.dev/api/people/1')
        const character = await response.json();
        data = {
            blogs: character.name,
            loading: false,
        };
    }
</script>
  
  <Navbar />
  <main class="h-screen bg-blue-100 bg-cover">
   <section class="hero-content items-center text-center">

      <div class=" pt-7 grid grid-cols-1 ">
        <!-- <img alt="Hubs" src="codehubs-removebg-preview.png" style="height: 120px" /> -->
        <h1 class="text-4xl font-extrabold">Hubs Blog</h1>
       

        <div class="mt-9 shadow-black/40 shadow-2xl text-m text-gray-900 dark:text-white">
          
        </div>
        <div>
        <button
        class="btn mt-8 shadow-black/50 shadow-2xl"
        on:click={async () => {
          window.scrollTo(0, 0);
          router.goto("/blog");
        }}>Blog</button
      >
      </div>
      </div>
      
    <section>
      
</main>