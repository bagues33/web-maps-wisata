<template>
	<div class="hero sm:max-h-screen max-h-[110vh] bg-base-200">
	<div class="container">
		<div class="hero-content flex-col lg:flex-row">
	    <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
	    <div>
	      <h1 class="text-3xl sm:text-5xl font-bold">Find Your Best Healing Place!</h1>
	      <p class="py-6 font-poppins">Rekomendasi tempat hiling untuk melepas penat dari kehidupan pahit kamu. Ciptakan suasana hati senang dan gembira dengan mengunjungi tempat hiling terbaik pilihan kita.</p>
	      <a href="#content"><button class="btn btn-primary">Get Started</button></a>
	    </div>
	  </div>
	</div>
	</div>
	<div id="content" class="container mx-auto mb-20">
		<div class="hidden sm:block" aria-hidden="true">
		  <div class="py-5">
		    <div class="border-t border-gray-200"></div>
		  </div>
		</div>
		<div class="mt-10 sm:mt-0">
		  <div class="md:grid md:grid-cols-3 md:gap-6 sm:mt-0 mt-10">
		    <div class="md:col-span-1">
		      <div class="myLocation mt-6 mx-4">
		      	<h4 class="font-bold font-adelia">Anda berada di lokasi :</h4>
		      	<div class="flex mt-3 items-start">
		      		<img class="w-24 mr-3" src="../assets/img/map.png">
		      		<div v-if="loadingMyLocation" class="w-full text-center">
		      			<div style="border-top-color:transparent" class="mx-auto mt-3 w-16 h-16 border-4 border-sky-500 border-solid rounded-full animate-spin"></div>
		      		</div>
		      		<div v-else>
		      			<p v-if="myLocation" class="mt-3 font-poppins">{{myLocation}}</p>
		      			<p v-else class="font-poppins">Klik <b>find</b> untuk menemukan lokasi...</p>
		      		</div>
		      	</div>
		      </div>
		      <div v-if="myLocation" class="w-full h-48 mt-5" id="map"></div>
		      <div v-else class="sm:mx-2 mx-6">
		      	<img class="sm:mx-0 mx-4" src="../assets/img/route.png">
		      </div>
		    </div>
		    <div class="mt-5 md:col-span-2 md:mt-0">
		      <form action="javascript:void(0)" method="POST">
		        <div class="overflow-hidden shadow sm:rounded-md">
		          <div class="bg-white px-4 py-5 sm:p-6">
		            <div class="grid grid-cols-6 gap-6">

		              <div class="col-span-6 sm:col-span-4 sm:w-auto w-72">
		                <label for="email-address" class="block text-sm font-medium text-gray-700">Location</label>
		                <div class="flex">
		                	 <input type="text" v-model="coordinates" name="email-address" id="email-address" autocomplete="email" class="mt-1 mr-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" disabled required>
		                	<button @click="locatorButtonPressed" class="btn">Find</button>
		                </div>
		              </div>
		              <div class="col-span-12 sm:col-span-12">
		              	<hr>
		              	<h2 class="mt-6 font-bold text-xl font-adelia">Temukan tempat wisata yang kamu inginkan.</h2>
		              </div>
		              <div class="col-span-6 sm:col-span-3">
		                <label for="spot" class="block text-sm font-medium text-gray-700">Spot</label>
		                <select id="spot" name="spot" v-model="type" autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" required>
		                  <option value="candi">Candi</option>
		                  <option value="pantai">Pantai</option>
		                  <option value="museum">Museum</option>
		                  <option value="goa">Goa</option>
		                  <option value="air terjun">Air Terjun</option>
		                  <option value="sungai">Sungai</option>
		                </select>
		              </div>

		              <div class="col-span-6 sm:col-span-3">
		                <label for="radius" class="block text-sm font-medium text-gray-700">Wilayah</label>
		                <select id="radius" name="radius" v-model="radius" autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" required>
		                  <option :value="' ' + city">Kota</option>
		                  <option :value="' ' + county">Provinsi</option>
		                  <option :value="' ' + country">Negara</option>
		                </select>
		              </div>

		              <!-- <div class="col-span-6">
		                <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
		                <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
		              </div> -->

		              <!-- <div class="col-span-6 sm:col-span-6 lg:col-span-2">
		                <label for="city" class="block text-sm font-medium text-gray-700">City</label>
		                <input type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
		              </div> -->
<!-- 
		              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
		                <label for="region" class="block text-sm font-medium text-gray-700">State / Province</label>
		                <input type="text" name="region" id="region" autocomplete="address-level1" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
		              </div> -->

		             <!--  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
		                <label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
		                <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
		              </div> -->
		            </div>
		          </div>
		          <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
		            <button type="submit" @click="findTempatWisata" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Show</button>
		          </div>
		        </div>
		      </form>
		    </div>
		  </div>
		</div>
		<div class="hidden sm:block" aria-hidden="true">
		  <div class="py-5">
		    <div class="border-t border-gray-200"></div>
		  </div>
		</div>
		<div class="container flex flex-wrap justify-around">
			<!-- <p>{{ places[1].display_name }}</p> -->
			<div v-if="loadingPlaces" class="w-full text-center">
		      <div style="border-top-color:transparent" class="mx-auto mt-3 w-16 h-16 border-4 border-sky-500 border-solid rounded-full animate-spin"></div>
		  </div>
			<div v-else v-for="item in places" class="card w-80 bg-base-100 shadow-xl mt-6 mr-2">
			  <div class="card-body">
			    <h2 class="card-title font-adelia"><font-awesome-icon icon="fa-solid fa-map-location-dot" /> {{ item.type }}</h2>
			    <p class="font-poppins">{{ item.display_name }}</p>
			    <div class="card-actions justify-end">
			      <label for="my-modal-6" @click="detailPlaces(item.osm_id)" class="btn modal-button">Detail</label>
			    </div>
			  </div>
			</div>
			<!-- Put this part before </body> tag -->
			<input type="checkbox" id="my-modal-6" class="modal-toggle" />
			<div class="modal modal-bottom sm:modal-middle">
				<div class="indicator justify-end">
					<span v-if="notFound" class="indicator-item w-24 indicator-center badge badge-error p-3 text-white">Not found</span> 
					<span  v-else class="indicator-item indicator-center badge badge-success p-3 text-white">Found</span> 
					  <div class="modal-box">
					  	<div class="flex sm:flex-nowrap flex-wrap">
					  		<div class="sm:w-1/2 w-full">
						  		<h3 class="font-bold text-xl"><i class="fa-solid fa-circle-info"></i> Detail Place</h3>
						  		<h4 class="mt-3 font-bold" v-if="notFound">Maaf gais, data tidak ditemukan!</h4>
							    <p v-else class="py-4 font-poppins">
							    		<h3>{{ display_name }}</h3>
							    		<ul class="list-outside mt-3">
							    			<li><b>Nama :</b> {{ road }} {{ naturalDetail }} {{ historic }} {{ leisure }} {{ boundary }} {{ waterway }}</li>
							    			<li><b>Desa :</b> {{ village }} {{ cityDetail }}</li>
							    			<li><b>Kecamatan :</b> {{ municipality }}</li>
							    			<li><b>Kota :</b> {{ countyDetail }}</li>
											  <li><b>Provinsi :</b> {{ stateDetail }}</li>
											  <li><b>Negara :</b> {{ countryDetail }}</li>
											</ul>
							    </p>
					  		</div>
						  	<div class="sm:w-1/2 w-full">
						  		<img v-if="notFound" class="sm:w-4/5 w-36 mx-auto mt-3" src="../assets/img/error.png">
						  		<div v-else id="map2" class="w-full h-48"></div>
						  	</div>
					  	</div>
					    <div class="modal-action">
					      <label for="my-modal-6" class="btn">Tutup</label>
					    </div>
					  </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import axios from 'axios';
	import { ref, computed, onMounted, inject } from 'vue';
	import mapboxgl from 'mapbox-gl'
	import Swal from 'sweetalert2'

	const lat = ref(0)
	const lng = ref(0)
	const type = ref('')
	const radius = ref('')
	const places = ref('')
	const someReactiveRef = ref(null)
	const myLocation = ref('')
	const loadingMyLocation = ref(false)
	const loadingPlaces = ref(false)
	const city = ref('')
	const county = ref('')
	const country = ref('')
	const notFound = ref(false)

	//detail places
	const cityDetail = ref('')
	const countryDetail = ref('')
	const countyDetail = ref('')
	const municipality = ref('')
	const naturalDetail = ref('')
	const stateDetail = ref('')
	const boundary = ref('')
	const road = ref('')
	const display_name = ref('')
	const historic = ref('')
	const village = ref('')
	const leisure = ref('')
	const waterway = ref('')

	const map = ref({})
	
	onMounted(() => {
    // getMap()
    
	})

	const coordinates = computed({
  		get() { return `${lat.value}, ${lng.value}` },
  		set(val) { lat.value = val; lng.value = val; }
	});

	const locatorButtonPressed = () => navigator.geolocation.getCurrentPosition(
      position => {
      	loadingMyLocation.value = true
        lat.value = position.coords.latitude;
        lng.value = position.coords.longitude;
        findMyLocation();
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
      },
      error => {
        console.log("Error getting location");
      }	
    );

		const findMyLocation = async () => {
			await axios
	    .get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat.value}&lon=${lng.value}`)
	    .then(response => {
	    	loadingMyLocation.value = false
	    	myLocation.value = response.data.display_name;
	    	city.value = response.data.address.city;
	    	city.value = response.data.address.county;
	    	county.value = response.data.address.state;
	    	country.value = response.data.address.country;
	    	setTimeout(() => getMap(lat.value, lng.value), 500);
	    	console.log(city.value);
	    	console.log(county.value);
	    	console.log(country.value);
	      console.log(response.data.address);
	    })
		}

		const findTempatWisata = async () => {
			if(lat.value && lng.value) {
				loadingPlaces.value = true
				console.log(type.value);
				console.log(radius.value);
				await axios
		    .get(`https://nominatim.openstreetmap.org/search?q=${type.value}${radius.value}&format=json`)
		    .then(response => {
		    	places.value = response.data;
		      console.log(response);
		      loadingPlaces.value = false
		    })
			} else {
				Swal.fire({
				  position: 'top-end',
				  icon: 'warning',
				  title: 'Temukan lokasi mu dulu!',
				  showConfirmButton: false,
				  timer: 1500
				})
			}
			
		}

		const detailPlaces = async (osm_id) => {
			await axios
	    .get(`https://nominatim.openstreetmap.org/lookup?osm_ids=W${osm_id}&format=json&extratags=1`)
	    .then(response => {
	
	    	console.log(Boolean(response.data));
	    	console.log(response.data.length);
	    	console.log(response.data);
	    	if (response.data.length !== 0) {
	    			// console.log(response.data[0].lat);
	    		 	countryDetail.value = response.data[0].address.country
			    	countyDetail.value = response.data[0].address.county
			    	municipality.value = response.data[0].address.municipality
			    	naturalDetail.value = response.data[0].address.natural
			    	stateDetail.value = response.data[0].address.state
			    	boundary.value = response.data[0].address.boundary
			    	road.value = response.data[0].address.road
			    	display_name.value = response.data[0].display_name
			    	historic.value = response.data[0].address.historic
			    	village.value = response.data[0].address.village
			    	cityDetail.value = response.data[0].address.city
			    	leisure.value = response.data[0].address.leisure
			    	waterway.value = response.data[0].address.waterway
			    	notFound.value = false
			    	setTimeout(() => getMap2(response.data[0].lat, response.data[0].lon), 500);
			    	
	    	} else {
	    		notFound.value = true
	    	}
	   
	    	
	    })
		}

		const getMap = async (lat, lon) => {
			try {
				console.log("map running");
	      mapboxgl.accessToken = 'pk.eyJ1IjoiYmFndXMzMyIsImEiOiJjbDhjaXpsZjEwNzl3M3RudDBidmU1eW8zIn0.c4_QHCq3x0i8DISlyFBfCw';
	     const map =  new mapboxgl.Map({
	        container: "map",
	        style: "mapbox://styles/mapbox/streets-v11",
	        center: [lon,lat],
	        zoom: 11,
	      });

	    const marker1 = new mapboxgl.Marker({ color: 'red'})
					.setLngLat([lon, lat])
					.addTo(map);

	      console.log(lat, lon);

   	 	} catch (err) {
      		console.log("map error", err);
    	}
		}

		const getMap2 = async (lat, lon) => {
	  	try {
				console.log("map2 running");
	      mapboxgl.accessToken = 'pk.eyJ1IjoiYmFndXMzMyIsImEiOiJjbDhjaXpsZjEwNzl3M3RudDBidmU1eW8zIn0.c4_QHCq3x0i8DISlyFBfCw';
	     const map2 =  new mapboxgl.Map({
	        container: "map2",
	        style: "mapbox://styles/mapbox/streets-v11",
	        center: [lon,lat],
	        zoom: 11,
	      });

	    const marker1 = new mapboxgl.Marker({ color: 'red'})
					.setLngLat([lon, lat])
					.addTo(map2);

	      console.log(lat, lon);

   	 	} catch (err) {
      		console.log("map error", err);
    	}
	  }
	
</script>

<style scoped>
	
</style>