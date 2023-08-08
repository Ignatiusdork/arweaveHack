<script>
  import { router } from "tinro";
  import { Route, meta } from "tinro";
  import Footer from "./Footer.svelte";
  // Initialization for ES Users
  import { Collapse, Dropdown, initTE, Ripple, Carousel } from "tw-elements";

  initTE({ Collapse, Dropdown, Ripple, Carousel });
</script>

<Route path="/">
  <header class="">
    <!-- Main navigation container -->
    <nav
      class="flex-no-wrap relative min-h-[56px] flex w-full items-center justify-between bg-neutral-300 py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
      data-te-navbar-ref
    >
      <div
        class="lg:container mx-auto flex w-full flex-wrap items-center justify-between px-3"
      >
        <!-- Hamburger button for mobile view -->
        <button
          class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <!-- Hamburger icon -->
          <span class="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-7 w-7"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>

        <!-- Collapsible navigation container -->
        <div
          class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          <!-- Logo -->
          <a
            class="mb-4 mr-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
            href="/"
          >
          <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome 
            - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M575.8 255.5c0 18-15 32.1-32
             32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 
             .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 
             40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
          </svg>
          </a>
          <!-- Left navigation links -->
          <ul
            class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
            data-te-navbar-nav-ref
          />
        </div>

        <!-- Right elements -->
        <div class="relative flex items-center">
          <!-- Con Icon -->

          <!-- Envelope Icon -->

          <!-- Button -->

          <!-- <button class="rounded-md bg-blue-500 px-4 py-2 text-white">
          Click me
        </button> -->

          <a class="btn bg-black text-cyan-500" href=" /connect"> CONNECT </a>

          <!-- Container with two dropdown menus -->
        </div>
      </div>
    </nav>

    <!-- Background image -->
    <div
      class="h-screen bg-cover bg-black bg-center bg-no-repeat"
      style="margin-top: -56px; background-image: url('');"
    >
      <!-- Call to action -->

      <!--Mask-->
      <div class=" h-full bg-[hsla(0,%,100%,0.9%)]">
        <!--Wrapper for flex box-->
        <div class="flex justify-center items-center h-full">
          <div class="text-white text-center">
            <h1 class="mb-19 text-5xl font-semibold">PinPoint-Earth</h1>
            <p class="font-medium text-center mb-5 mt-7 text-cyan-500">
              Protocol
            </p>
            <h2 class="mb-14 mt-9 text-3xl font-medium">
              Introducing PinPoint-Earth - Your Gateway to Global Exploration!
            </h2>
            <p class="pb-9 text-cyan-500">With PinPoint Earth, you can seamlessly explore breathtaking landscapes, stunning landmarks, and 
              hidden gems, all from the comfort of your screen.</p>

            <a class="btn  mt-4  text-cyan-500 h-12 px-6 bg-black" href="#connect"> LET's GO! </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Background image -->
  </header>

  <!-- This will be our grid wrapper -->
  <main>
    <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> -->

    <!-- </div> -->

    <!-- Section: Details -->
      <Footer/>
    <!--Footer-->
  </main>
</Route>
