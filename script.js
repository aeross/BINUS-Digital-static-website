// interactivity for banner carousel
const bannerImages = document.querySelectorAll(".banner > img");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

function slideImage(reverse=false) {
    // the index of bannerImages to be shown
    let show;  
    // the index of bannerImages to be hidden
    let hide;

    for (let i = 0; i < bannerImages.length; i++) {
        const bannerImage = bannerImages[i];
        if (!bannerImage.classList.contains("hidden")) {
            hide = i;
            if (reverse) {
                show = (i - 1 < 0) ? bannerImages.length - 1 : i - 1;
            } else {
                show = (i + 1 >= bannerImages.length) ? 0 : i + 1;
            }

            bannerImages[hide].classList.add("hidden");
            bannerImages[show].classList.remove("hidden");
            break;
        }
    }
}

prevButton.addEventListener("click", () => { slideImage(true) });
nextButton.addEventListener("click", () => { slideImage(false) });


// interactivity for partnership tab
const natBtn = document.querySelector("#national-btn");
const intlBtn = document.querySelector("#international-btn");
const industryBtn = document.querySelector("#industry-btn");

const natPartners = document.querySelector("#national");
const intlPartners = document.querySelector("#international");
const industryPartners = document.querySelector("#industry");

natBtn.addEventListener("click", () => {
    natBtn.classList.add("selected");
    intlBtn.classList.remove("selected");
    industryBtn.classList.remove("selected");

    natPartners.classList.remove("hidden");
    intlPartners.classList.add("hidden");
    industryPartners.classList.add("hidden");
})

intlBtn.addEventListener("click", () => {
    natBtn.classList.remove("selected");
    intlBtn.classList.add("selected");
    industryBtn.classList.remove("selected");

    natPartners.classList.add("hidden");
    intlPartners.classList.remove("hidden");
    industryPartners.classList.add("hidden");
})

industryBtn.addEventListener("click", () => {
    natBtn.classList.remove("selected");
    intlBtn.classList.remove("selected");
    industryBtn.classList.add("selected");

    natPartners.classList.add("hidden");
    intlPartners.classList.add("hidden");
    industryPartners.classList.remove("hidden");
})

