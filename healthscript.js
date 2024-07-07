
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const location = document.getElementById('location').value.trim();
    const specialty = document.getElementById('specialty').value.trim();

    
    const searchResults = {
        hospitals: [
            { name: 'City Hospital', location: 'Bhubaneswar' },
            { name: 'AIIMS Bhubaneswar', location: 'Bhubaneswar' },
            { name: 'Care Hospitals', location: 'Bhubaneswar' }
        ],
        cardiology: [
            { name: 'Dr. A. K. Panda Clinic', specialty: 'Cardiology', location: 'Bhubaneswar' },
            { name: 'Dr. B. P. Mishra Heart Center', specialty: 'Cardiology', location: 'Bhubaneswar' },
            { name: 'AIIMS Bhubaneswar Cardiology Department', specialty: 'Cardiology', location: 'Bhubaneswar' }
        ],
        oncology: [
            { name: 'Tata Memorial Hospital', specialty: 'Oncology', location: 'Bhubaneswar' },
            { name: 'Ruby Hall Clinic', specialty: 'Oncology', location: 'Bhubaneswar' },
            { name: 'Care Hospitals Oncology Department', specialty: 'Oncology', location: 'Bhubaneswar' }
        ],
        pediatrics: [
            { name: 'Child Health Clinic', specialty: 'Pediatrics', location: 'Bhubaneswar' },
            { name: 'Dr. S. K. Mohapatra Pediatric Center', specialty: 'Pediatrics', location: 'Bhubaneswar' },
            { name: 'KIMS Pediatric Department', specialty: 'Pediatrics', location: 'Bhubaneswar' }
        ]
    };

   
    const filteredResults = {
        hospitals: searchResults.hospitals.filter(hospital => hospital.location.toLowerCase() === location.toLowerCase()),
        cardiology: searchResults.cardiology.filter(doctor => doctor.location.toLowerCase() === location.toLowerCase() && doctor.specialty.toLowerCase().includes(specialty.toLowerCase())),
        oncology: searchResults.oncology.filter(doctor => doctor.location.toLowerCase() === location.toLowerCase() && doctor.specialty.toLowerCase().includes(specialty.toLowerCase())),
        pediatrics: searchResults.pediatrics.filter(doctor => doctor.location.toLowerCase() === location.toLowerCase() && doctor.specialty.toLowerCase().includes(specialty.toLowerCase()))
    };

    
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; 

    Object.keys(filteredResults).forEach(key => {
        if (filteredResults[key].length > 0) {
            const resultSection = document.createElement('div');
            resultSection.classList.add('result');

            const heading = document.createElement('h3');
            heading.textContent = key.charAt(0).toUpperCase() + key.slice(1); 

            const resultList = document.createElement('ul');
            filteredResults[key].forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.name} - ${item.specialty || ''}`;
                resultList.appendChild(listItem);
            });

            resultSection.appendChild(heading);
            resultSection.appendChild(resultList);

            resultsContainer.appendChild(resultSection);
        }
    });

    
    const clearButton = document.getElementById('clearResults');
    clearButton.style.display = 'block';
});


document.getElementById('clearResults').addEventListener('click', function() {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; 

    
    this.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function() { 
	const carousel = document.querySelector(".carousel"); 
	const arrowBtns = document.querySelectorAll(".wrapper i"); 
	const wrapper = document.querySelector(".wrapper"); 

	const firstCard = carousel.querySelector(".card"); 
	const firstCardWidth = firstCard.offsetWidth; 

	let isDragging = false, 
		startX, 
		startScrollLeft, 
		timeoutId; 

	const dragStart = (e) => { 
		isDragging = true; 
		carousel.classList.add("dragging"); 
		startX = e.pageX; 
		startScrollLeft = carousel.scrollLeft; 
	}; 

	const dragging = (e) => { 
		if (!isDragging) return; 
	
		 
		const newScrollLeft = startScrollLeft - (e.pageX - startX); 
	
		 
		if (newScrollLeft <= 0 || newScrollLeft >= 
			carousel.scrollWidth - carousel.offsetWidth) { 
			
			
			isDragging = false; 
			return; 
		} 
	
		
		carousel.scrollLeft = newScrollLeft; 
	}; 

	const dragStop = () => { 
		isDragging = false; 
		carousel.classList.remove("dragging"); 
	}; 

	const autoPlay = () => { 
	
		
		if (window.innerWidth < 800) return; 
		
		
		const totalCardWidth = carousel.scrollWidth; 
		
		 
		const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 
		
		 
		if (carousel.scrollLeft >= maxScrollLeft) return; 
		
		
		timeoutId = setTimeout(() => 
			carousel.scrollLeft += firstCardWidth, 2500); 
	}; 

	carousel.addEventListener("mousedown", dragStart); 
	carousel.addEventListener("mousemove", dragging); 
	document.addEventListener("mouseup", dragStop); 
	wrapper.addEventListener("mouseenter", () => 
		clearTimeout(timeoutId)); 
	wrapper.addEventListener("mouseleave", autoPlay); 

	
	arrowBtns.forEach(btn => { 
		btn.addEventListener("click", () => { 
			carousel.scrollLeft += btn.id === "left" ? 
				-firstCardWidth : firstCardWidth; 
		}); 
	}); 
}); 



const text1_options = [
  "Why art is so important",
  "Why you shouldn't buy the new iPhone",
  "Is life actually real?",
  "How to learn JS in 2 months"
];
const text2_options = [
  "69 min. read",
  "7 min. read",
  "8 min. read",
  "87,658.1277 min. read"
];
const color_options = ["#EBB9D2", "#FE9968", "#7FE0EB", "#6CE5B1"];
const image_options = [
  "https://images.unsplash.com/photo-1524721696987-b9527df9e512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80",
  "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1506073828772-2f85239b6d2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
  "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
];
var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
  i = i + 1;
  i = i % text1_options.length;
  currentOptionText1.dataset.nextText = text1_options[i];

  currentOptionText2.dataset.nextText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-next");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-next");
  }, 650);
};

optionPrevious.onclick = function () {
  if (i === 0) {
    i = text1_options.length;
  }
  i = i - 1;
  currentOptionText1.dataset.previousText = text1_options[i];

  currentOptionText2.dataset.previousText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-previous");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);

  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-previous");
  }, 650);
};





