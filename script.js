// Doctor Data

const doctors = [

    {
        name: "Dr. Amod Kumar",
        department: "Cardiology",
        experience: "12 Years Experience",
        fee: "₹600"
    },

    {
        name: "Dr. Priya Raj",
        department: "Neurology",
        experience: "10 Years Experience",
        fee: "₹700"
    },

    {
        name: "Dr.Kaushal Bhaskar ",
        department: "Dermatology",
        experience: "8 Years Experience",
        fee: "₹500"
    },

    {
        name: "Dr. Mani Raj",
        department: "Pediatrics",
        experience: "9 Years Experience",
        fee: "₹550"
    },

    {
        name: "Dr. Mukul Kumar",
        department: "Cardiology",
        experience: "15 Years Experience",
        fee: "₹800"
    },

    {
        name: "Dr. Anshuman Kumar",
        department: "Sexology",
        experience: "7 Years Experience",
        fee: "₹500"
    }

];


// Display Doctors

function displayDoctors(list) {

    const container =
        document.getElementById("doctorContainer");

    container.innerHTML = "";


    list.forEach(function(doctor) {

        const card = document.createElement("div");

        card.className = "doctor-card";


        card.innerHTML = `

            <div class="doctor-image">
               👨‍⚕️
            </div>

            <h3>${doctor.name}</h3>

            <p>
                <strong>
                    ${doctor.department}
                </strong>
            </p>

            <p>
                ${doctor.experience}
            </p>

            <p>
                Consultation Fee:
                <strong>${doctor.fee}</strong>
            </p>

            <button
                onclick="selectDoctor('${doctor.name}')">
                Book Appointment
            </button>

        `;


        container.appendChild(card);

    });

}


// Filter Doctors

function filterDoctors(department) {

    const buttons =
        document.querySelectorAll(".department");

    buttons.forEach(function(button) {

        button.classList.remove("active");

    });


    event.target.classList.add("active");


    if (department === "All") {

        displayDoctors(doctors);

    } else {

        const filteredDoctors =
            doctors.filter(function(doctor) {

                return doctor.department === department;

            });

        displayDoctors(filteredDoctors);

    }

}


// Select Doctor

function selectDoctor(name) {

    document.getElementById("selectedDoctor").value = name;


    document
        .getElementById("appointment")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// Appointment Form

document
    .getElementById("appointmentForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const patientName =
            document.getElementById("patientName").value;

        const doctor =
            document.getElementById("selectedDoctor").value;

        const date =
            document.getElementById("appointmentDate").value;

        const time =
            document.getElementById("appointmentTime").value;


        if (!doctor) {

            alert("Please select a doctor first.");

            return;

        }


        // Show Appointment Details

        const details =
            document.getElementById("appointmentDetails");


        details.innerHTML = `

            <h2>Appointment Confirmed ✅</h2>

            <p>
                <strong>Patient:</strong>
                ${patientName}
            </p>

            <p>
                <strong>Doctor:</strong>
                ${doctor}
            </p>

            <p>
                <strong>Date:</strong>
                ${date}
            </p>

            <p>
                <strong>Time:</strong>
                ${time}
            </p>

            <p class="success">
                Your appointment has been successfully booked!
            </p>

        `;


        // Scroll to details

        document
            .getElementById("details")
            .scrollIntoView({
                behavior: "smooth"
            });


        // Reset form

        document
            .getElementById("appointmentForm")
            .reset();

    });


// Initially Display All Doctors

displayDoctors(doctors);