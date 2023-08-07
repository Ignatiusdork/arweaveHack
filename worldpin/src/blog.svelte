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
<main class="container">
  <section class="hero-content items-center text-center">
    <div class=" pt-7 grid grid-cols-1">
      <!-- <img alt="Hubs" src="codehubs-removebg-preview.png" style="height: 120px" /> -->
      <h1 class="text-4xl font-extrabold">Hubs Blog</h1>

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
              <h3 class="text-4xl link">{post.title}</h3>
              <div id="{post.id}_container" />
            </a>
          </div>
        {/each}
      {:else}
        <p>No posts yet.</p>
      {/if}
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

    <section />
  </section>
</main>
