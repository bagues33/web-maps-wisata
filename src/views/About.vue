<template>
	<section class="h-full w-full px-8 pt-20 bg-white">
        <h2 class="md:text-4xl text-3xl font-semibold mb-24 tracking-tight text-center text-medium-black">
                About Us
        </h2>
        <div class="content-3-1 flex lg:flex-row flex-col" style="font-family: 'Poppins', sans-serif">
            <!-- Left Column -->
            <div class="w-full lg:w-1/2 text-center justify-center flex lg:mb-0 mb-12">
                <img id="hero"
                    src="../assets/img/undraw-travel.svg"
                    alt="" />
            </div>
            <!-- Right Column -->
            <div class="lg:w-1/2 w-full flex flex-col lg:items-start items-center lg:text-left text-center">
                <p class="mb-5">Hilling Spot merupakan website yang dapat digunakan untuk menemukan tempat hiling terbaik kita.</p>
                <p class="mb-10">Fitur yang dapat anda temukan pada Hiling Spot.</p>
                <ul>
                    <li class="mb-8">
                        <h4
                            class="font-medium text-2xl mb-5 flex lg:flex-row flex-col items-center lg:justify-start justify-center text-medium-black">
                            <span
                                class="circle h-12 w-12 text-xl flex items-center justify-center lg:mr-5 lg:mb-0 mb-5 text-white rounded-full bg-primary">1</span>
                            Find Location
                        </h4>
                        <p class="text-base leading-7 tracking-wide caption">
                            Kamu dapat menemukan alamat lengkap lokasi sesuai keberadaanmu<br class="sm:inline-block hidden" />
                            
                        </p>
                    </li>
                    <li class="mb-8">
                        <h4
                            class="font-medium text-2xl mb-5 flex lg:flex-row flex-col items-center lg:justify-start justify-center text-medium-black">
                            <span
                                class="circle h-12 w-12 text-xl flex items-center justify-center lg:mr-5 lg:mb-0 mb-5 text-white rounded-full bg-primary">2</span>
                            Find Places
                        </h4>
                        <p class="text-base leading-7 tracking-wide caption">
                            Menampilkan berbagai pilihan tempat hiling yang ada disekitar kita.<br class="sm:inline-block hidden" />
                           
                        </p>
                    </li>
                    <!-- <li class="mb-16">
                        <h4
                            class="font-medium text-2xl mb-5 flex lg:flex-row flex-col items-center lg:justify-start justify-center text-medium-black">
                            <span
                                class="circle h-12 w-12 text-xl flex items-center justify-center lg:mr-5 lg:mb-0 mb-5 text-white rounded-full">3</span>
                            Halfpenny
                        </h4>
                        <p class="text-base leading-7 tracking-wide caption">
                            We provide economical packages for those of you<br class="sm:inline-block hidden" />
                            who are still in school or workers.
                        </p>
                    </li> -->
                </ul>
                <router-link to="/" class="mb-20">
                    <button
                        class="btn-fill px-10 py-4 mt-10 text-base text-white font-semibold rounded-xl cursor-pointer focus:outline-none tracking-wide bg-slate-600">
                        <font-awesome-icon icon="fa-solid fa-angles-left" /> Home
                    </button>
                </router-link>
            </div>
        </div>
    </section>    
</template>

<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

        /*.content-3-1 .circle {
            background-color: #ffbf56;
        }*/

        .content-3-1 .caption {
            color: #565656;
        }

        .content-3-1 .btn-fill {
            /*background-color: #ff7c57;*/
            transition: 0.3s;
        }

        .content-3-1 .btn-fill:hover {
            /*background-color: #ff9779;*/
            transition: 0.3s;
        }

        .content-3-1 .text-medium-black {
            color: #121212;
        }
</style>