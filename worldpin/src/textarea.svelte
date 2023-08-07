<script>
    import { Route } from "tinro";
    import Navbar from "./lib/navbar.svelte";
    
</script>



<Navbar />
<main>
    <div class="flex items-center justify-center  bg-neutral-400 h-screen">
        <div class="flex flex-col w-1/3">
            <div class="bg-white shadow-md rounded-3xl p-5">
                <div class="flex flex-col items-center">
                    <h2 class="font-semibold text-lg mr-auto">Write A Blog Post</h2>
                    <div class="w-full mt-3"></div>
                </div>
                <div class="mt-5">
                    <div class="form">
                        <div class="flex-auto w-full mb-1 text-xs space-y-2">
                            <label class="font-semibold text-gray-600 py-2">Description</label>
                            <textarea
                           
                            
                            class="
                            h-28
                            w-full
                            appearance-none
                            block
                            bg-gray-100
                            border
                            eounded-lg
                            py-4
                            px-3
                            focus:outline-none
                            "
                            
                            >
                            </textarea>
                            <p
                               class="text-sm text-gray-400 text-left my-3"
                               
                            >
                            
                            <!-- {{remaincharactersText}} -->
                            </p>
                        </div>
                        <div class="mt-5 text-right flex flex-col-reverse md:space-x-3 md:block">
                            <button 
                            class="
                             mb-2
                             px-5 
                             py-2
                             text-sm
                             shadow-sm
                             font-medium
                             tracking-wider
                             border
                             text-gray-600
                             rounded-full
                             hover:shadow-lg
                             hover:bg-gray-50
                             focus:outline-none
                             bg-white
                             "
                            >
                            Cancel
                        </button>
                        <button 
                         class="
                         mb-2
                         bg-green-400
                         px-5
                         py-2
                         text-sm
                         shadow-sm
                         font-medium
                         tracking-wider
                         text-white
                         rounded-full
                         hover:shadow-lg
                         hover:bg-green-500
                         focus:outline-none
                        "
                        >
                        Publish
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>


<!-- <script>
    
    export default {
        data () {
            return{
                message: "",
                maxcharacters:100,
                remaincharactersText: "Reamining 100 characters",
            };
        },
        methods:{
            remaincharCount: function () {
                if (this.message.length > this.maxcharacters) {
                  this.remaincharactersText =
                    "Exceeded " + this.maxcharacters + " characters limit.";
                }else {
                    var remainCharacters = this.maxcharacters - this.message.length;
                    this.remaincharactersText = 
                    'Remaining'+ remainCharacters +'characters.';
                }
            }
        }
    };
</script> -->

<!-- :class="{"border-red-600": message.length > maxcharacters}" -->
<!-- v-model="message" 
@keyup="remaincharCount()" -->