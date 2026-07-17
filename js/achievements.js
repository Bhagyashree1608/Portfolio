// =====================================================
// Achievements Loader
// =====================================================

let achievements = [];

// =====================================================
// Load Achievements
// =====================================================

async function loadAchievements() {

    try {

        const response = await fetch("data/achievements.json");

        achievements = await response.json();

        displayAchievements(achievements);

    }

    catch (error) {

        console.error("Unable to load achievements.", error);

    }

}

// =====================================================
// Display Achievement Cards
// =====================================================

function displayAchievements(data) {

    const achievementsContainer =
    document.getElementById("achievementsContainer");

    if (!achievementsContainer) return;

    achievementsContainer.innerHTML = "";

    data.forEach(item => {

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
            duration-500"
            data-aos="zoom-in">

            <!-- Achievement Image -->

            <div class="overflow-hidden">

                <img
                    src="${item.image}"
                    alt="${item.title}"
                    class="w-full
                    h-64
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-700">

            </div>

            <!-- Card Content -->

            <div class="p-8">

                <!-- Badge -->

                <div
                    class="inline-flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-full
                    bg-[#C5AAA4]/20
                    text-[#C5AAA4]
                    font-semibold">

                    <i class="${item.icon}"></i>

                    <span>

                        ${item.badge}

                    </span>

                </div>

                <!-- Title -->

                <h3
                    class="text-2xl
                    font-bold
                    text-[#E5DAD3]
                    mt-6
                    leading-9">

                    ${item.title}

                </h3>

                <!-- Organization -->

                <p
                    class="mt-5
                    text-[#C5AAA4]
                    font-medium">

                    <i class="fa-solid fa-building mr-2"></i>

                    ${item.organization}

                </p>

                <!-- Year -->

                <p
                    class="mt-3
                    text-[#E5DAD3]/70">

                    <i class="fa-solid fa-calendar-days mr-2"></i>

                    ${item.year}

                </p>

                <!-- Description -->

                <!--<p
                    class="mt-6
                    text-[#E5DAD3]/80
                    leading-8">

                    ${item.description}

                </p>

            </div>

        </div>

        `;

        achievementsContainer.innerHTML += card;

    });

}

// =====================================================
// Load Achievements
// =====================================================

loadAchievements();