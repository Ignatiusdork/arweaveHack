<script>
  import { router } from "tinro";
  import Navbar from "./lib/navbar.svelte";
  import Footer from "./Footer.svelte";
  import { fetchTransaction, getAllTxFromID } from "./lib/utils";

  // let blogs = [];

  $: data = {
    blogs: [],
    loading: true,
  };

  $: blog_active_states = {};

  async function loadData() {
    const addr = "vVvN5qZ-KSno5hpsK_t2B-6gq2XGDENX3_ZE1HzzGs4";
    var res = await getAllTxFromID(addr);
    let _blogs = [];
    await res.forEach(async (element) => {
      let tx_details_res = await fetchTransaction(element.node.id);
      const decoder = new TextDecoder("utf-8");
      const decodedData = decoder.decode(tx_details_res.data);
      blog_active_states[element.node.id] = false;
      data.loading = false;
      _blogs.push({
        title: tx_details_res.tags[0].value,
        body: decodedData,
        id: element.node.id,
        isActive: false,
      });
      console.log(_blogs);
    });
    data.blogs = _blogs;
  }

  loadData();
</script>

<Navbar />
<main class="h-screen">
  <section class="hero-content items-center text-center">
    <div
      class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 lg:col-span-1 2xl:col-span-1 pt-7"
    >
      <!-- <img alt="Hubs" src="codehubs-removebg-preview.png" style="height: 120px" /> -->
      <h1 class="text-3xl font-extrabold">PinPoint-Blog</h1>

      <div
        class="mt-9 shadow-black/40 shadow-2xl text-m text-gray-900 dark:text-white"
      />
      {#if data.loading}
        <!-- <p>Loading blog posts...</p> -->
      {:else if data.blogs.length > 0}
        {#each data.blogs as post}
          <div class="row mb-5">
            <a
              href="#/blog"
              on:click={() => {
                console.log(blog_active_states[post.id]);
                let container = document.getElementById(post.id + `_container`);
                if (blog_active_states[post.id] == false) {
                  container.insertAdjacentHTML("beforeend", post.body);
                } else {
                  container.innerHTML = `<div id="{post.id}_container" />`;
                }
                blog_active_states[post.id] = !blog_active_states[post.id];
              }}
            >
              <!-- {#if blog_active_states[post.id]} Hide {:else} Show {/if} -->
              <h2 class="text-3xl pb-4 font-normal link">{post.title}</h2>
              <div
                class="block shadow-black/60 shadow-2xl rounded-lg bg-white px-6 ml-10 dark:bg-neutral-700"
                id="{post.id}_container"
              />
            </a>
          </div>
        {/each}
      {:else}
        <p class="mt-5 text-orange-400 link text-3xl font-medium">
          No posts yet.
        </p>
      {/if}
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
