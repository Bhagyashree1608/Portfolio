// =============================================
// Projects Loader
// =============================================

let allProjects = [];

// =============================================
// Load Projects
// =============================================

async function loadProjects() {

    try {

        const response = await fetch("data/projects.json");

        allProjects = await response.json();

        displayProjects(allProjects);

    }

    catch (error) {

        console.error("Unable to load projects.", error);

    }

}

// =============================================
// Display Projects
// =============================================

function displayProjects(projects) {

  const projectContainer =
    document.getElementById("projectsContainer");

    if (!projectContainer) return;

    projectContainer.innerHTML = "";

    projects.forEach(project => {

       const techBadges = project.technologies.map(tech =>

                `
                <span
                class="
                inline-flex
                justify-center
                items-center
                h-10
                min-w-[95px]
                px-4
                rounded-full
                bg-[#515272]
                text-[#E5DAD3]
                text-sm
                font-medium">

                ${tech}

                </span>
                `

                ).join("");



        const featureList = project.features.map(feature =>

            `<li>${feature}</li>`

        ).join("");



        const card = `

        <div
        class="group
        bg-[#515272]/20
        backdrop-blur-xl
        border
        border-[#9A8F9B]/30
        rounded-3xl
        overflow-hidden
        shadow-xl
        hover:-translate-y-3
        hover:border-[#C5AAA4]
        hover:shadow-2xl
        transition-all
        duration-500">

            <!-- Image -->

            <div class="overflow-hidden">

                <img
                src="${project.image}"
                alt="${project.title}"
                class="w-full h-62 object-cover
                group-hover:scale-110
                transition-transform
                duration-700">

            </div>

            <!-- Content -->

            <div class="p-6">

              <div class="flex justify-between items-center">

                <h3
                class="text-3xl font-bold text-[#E5DAD3]">

                    ${project.title}

                </h3>

                <span
                class="px-4 py-2 rounded-full
                bg-[#C5AAA4]/20
                text-[#C5AAA4]
                text-sm">

                    ${project.category}

                </span>

              </div>

                <p
                class="mt-4
                text-[#E5DAD3]/75
                leading-7
                text-base">

                    ${project.description}

                </p>

                <!-- Tech -->
                    
                <div
                class="flex flex-wrap gap-2 mt-5">

                    ${techBadges}

                </div>

                <!-- Features -->

                <div class="mt-6">

                    <h4
                    class="text-xl
                    font-semibold
                    text-[#C5AAA4]
                    mb-4">

                        Key Features

                    </h4>

                    <ul
                    class="list-disc ml-6
                    text-[#E5DAD3]/80
                    space-y-2">

                        ${featureList}

                    </ul>

                </div>

                <!-- Buttons -->

                <div
                class="flex flex-wrap gap-4 mt-8">

                    <a
                    href="${project.github}"
                    target="_blank"
                    class="px-6 py-3
                    rounded-xl
                    bg-[#C5AAA4]
                    text-[#292845]
                    font-semibold
                    hover:scale-105
                    duration-300">

                        <i class="fab fa-github mr-2"></i>

                        GitHub

                    </a>

                    <a
                    href="${project.demo}"
                    target="_blank"
                    class="px-6 py-3
                    rounded-xl
                    border
                    border-[#C5AAA4]
                    hover:bg-[#515272]
                    duration-300">

                        <i class="fa-solid fa-arrow-up-right-from-square mr-2"></i>

                         Demo

                    </a>

                </div>

            </div>

        </div>

        `;

        projectContainer.innerHTML += card;

    });
// =============================================
// More Projects Card
// =============================================

const moreProjectsCard = `

<div
class="group
bg-[#515272]/10
backdrop-blur-xl
border-2
border-dashed
border-[#C5AAA4]
rounded-3xl
p-10
flex
flex-col
justify-center
items-center
text-center
hover:bg-[#515272]/30
hover:border-[#E5DAD3]
hover:-translate-y-3
transition-all
duration-500">

    <i
    class="fab fa-github
    text-7xl
    text-[#C5AAA4]
    mb-8
    group-hover:scale-110
    duration-300">

    </i>

    <h3
    class="text-3xl
    font-bold
    text-[#E5DAD3]">

        More Projects

    </h3>

    <p
    class="mt-6
    text-[#E5DAD3]/70
    leading-8">

        Explore my GitHub profile for additional
        Full Stack, Java, Android and AI projects.

    </p>

    <a
    href="https://github.com/Bhagyashree1608?tab=overview&from=2026-07-01&to=2026-07-07"
    target="_blank"
    class="mt-10
    px-8
    py-4
    rounded-xl
    bg-[#C5AAA4]
    text-[#292845]
    font-bold
    hover:scale-105
    transition">

        <i class="fab fa-github mr-2"></i>

        Visit GitHub

    </a>

</div>

`;

projectContainer.innerHTML += moreProjectsCard;

}

// =============================================
// Load
// =============================================

loadProjects();