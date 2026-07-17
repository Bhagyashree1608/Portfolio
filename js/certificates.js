// =====================================================
// Certificates Loader
// =====================================================

let certificates = [];

// =====================================================
// Load Certificates
// =====================================================

async function loadCertificates() {

    try {

        const response = await fetch("data/certificates.json");

        certificates = await response.json();

        displayCertificates(certificates);

    }

    catch (error) {

        console.error("Unable to load certificates.", error);

    }

}

// =====================================================
// Display Certificate Cards
// =====================================================

function displayCertificates(data) {

   const certificatesContainer =
    document.getElementById("certificatesContainer");

    if (!certificatesContainer) return;

    certificatesContainer.innerHTML = "";

    data.forEach(certificate => {

        const card = `

        <div
            class="group
            bg-[#515272]/20
            backdrop-blur-xl
            border
            border-[#9A8F9B]/30
            rounded-3xl
            p-8
            shadow-xl
            hover:-translate-y-3
            hover:border-[#C5AAA4]
            hover:shadow-2xl
            transition-all
            duration-500"
            data-aos="zoom-in">

            <!-- Icon -->

            <div
                class="w-20
                h-20
                rounded-2xl
                bg-[#C5AAA4]/15
                flex
                items-center
                justify-center
                mb-8">

                <i
                    class="${certificate.icon}
                    text-5xl
                    text-red-500">
                </i>

            </div>

            <!-- Certificate Title -->

            <h3
                class="text-2xl
                font-bold
                text-[#E5DAD3]
                leading-9">

                ${certificate.title}

            </h3>

            <!-- Organization -->

            <p
                class="mt-4
                text-[#C5AAA4]
                font-medium
                text-lg">

                <i class="fa-solid fa-building mr-2"></i>

                ${certificate.organization}

            </p>

            <!-- Year -->

            <p
                class="mt-3
                text-[#E5DAD3]/70">

                <i class="fa-solid fa-calendar-days mr-2"></i>

                ${certificate.year}

            </p>

            <!-- Description -->

            <p
                class="mt-6
                text-[#E5DAD3]/80
                leading-8">

                ${certificate.description}

            </p>

            <!-- Verified -->

            <div
                class="mt-6
                flex
                items-center
                gap-2
                text-green-400
                font-medium">

                <i class="fa-solid fa-circle-check"></i>

                Verified Certificate

            </div>

            <!-- Button -->

            <div class="mt-8">

                <a
                    href="${certificate.pdf}"
                    target="_blank"
                    class="w-full
                    inline-flex
                    justify-center
                    items-center
                    gap-3
                    px-6
                    py-4
                    rounded-xl
                    bg-[#C5AAA4]
                    text-[#292845]
                    font-bold
                    hover:scale-105
                    transition">

                    <i class="fa-solid fa-file-pdf"></i>

                    View Certificate

                </a>

            </div>

        </div>

        `;

        certificatesContainer.innerHTML += card;

    });

}

// =====================================================
// Load Certificates
// =====================================================

loadCertificates();