document.addEventListener('DOMContentLoaded', () => {
    // Ambil semua elemen HTML yang diperlukan
    const hormoneButtons = document.querySelectorAll('.hormone-buttons button');
    const heart = document.getElementById('heart');
    const brain = document.getElementById('brain');
    const eyes = document.getElementById('eyes');
    const stomach = document.getElementById('stomach');
    const skeleton = document.getElementById('skeleton');
    const kidneys = document.getElementById('kidneys');
    const reproductive = document.getElementById('reproductive');
    const messageContent = document.querySelector('.message-content');
    const disorderInfo = document.querySelector('.disorder-info');
    const allOrgans = document.querySelectorAll('.organ');

    // Fungsi untuk mereset semua efek visual
    function resetEffects() {
        allOrgans.forEach(organ => {
            organ.className = 'organ'; // Atur ulang semua kelas
        });
        messageContent.textContent = '';
        disorderInfo.textContent = '';
    }

    // Objek yang memetakan ID tombol ke fungsi efek dan pesan
    const hormoneActions = {
        'adrenalin-btn': () => {
            heart.classList.add('heart-fast');
            eyes.classList.add('eyes-alert');
            messageContent.textContent = "Adrenalin: Hormon 'melawan atau lari' (fight or flight). Meningkatkan detak jantung dan kewaspadaan.";
            disorderInfo.textContent = "Gangguan: Kecemasan, panik, dan tekanan darah tinggi jika hormon terlalu sering dilepaskan.";
        },
        'dopamin-btn': () => {
            brain.classList.add('brain-happy');
            messageContent.textContent = "Dopamin: Hormon 'rasa senang'. Memberikan motivasi dan rasa puas.";
            disorderInfo.textContent = "Gangguan: Penyakit Parkinson (rendahnya dopamin), dan adiksi (dopamin yang berlebihan).";
        },
        'melatonin-btn': () => {
            brain.classList.add('brain-sleepy');
            messageContent.textContent = "Melatonin: Hormon 'tidur'. Memberi sinyal pada tubuh saatnya beristirahat.";
            disorderInfo.textContent = "Gangguan: Insomnia atau gangguan pola tidur jika produksi melatonin terganggu.";
        },
        'insulin-btn': () => {
            stomach.classList.add('stomach-storage');
            messageContent.textContent = "Insulin: Mengatur gula darah. Menyimpan gula dari darah ke dalam sel.";
            disorderInfo.textContent = "Gangguan: Diabetes. Kadar gula darah tinggi karena tubuh tidak memproduksi cukup insulin atau tidak dapat menggunakannya dengan efektif.";
        },
        'glukagon-btn': () => {
            stomach.classList.add('stomach-release');
            messageContent.textContent = "Glukagon: Mengatur gula darah. Melepaskan gula dari hati saat kadar gula darah rendah.";
            disorderInfo.textContent = "Gangguan: Hipoglikemia (gula darah rendah) jika glukagon terlalu rendah.";
        },
        'oksitosin-btn': () => {
            brain.classList.add('brain-calm');
            messageContent.textContent = "Oksitosin: Hormon 'cinta'. Muncul saat berinteraksi sosial, memeluk, dan melahirkan. Menciptakan rasa tenang dan ikatan.";
            disorderInfo.textContent = "Gangguan: Masalah dalam ikatan sosial atau empati yang rendah.";
        },
        'kortisol-btn': () => {
            brain.classList.add('brain-stress');
            messageContent.textContent = "Kortisol: Hormon 'stres'. Memberi energi cepat saat stres. Penting untuk mengatur metabolisme.";
            disorderInfo.textContent = "Gangguan: Penyakit Cushing (kortisol berlebihan) atau Penyakit Addison (kekurangan kortisol).";
        },
        'paratiroid-btn': () => {
            skeleton.classList.add('skeleton-strong');
            messageContent.textContent = "Hormon Paratiroid: Mengatur kadar kalsium dalam darah. Mendorong pelepasan kalsium dari tulang.";
            disorderInfo.textContent = "Gangguan: Hiperparatiroidisme (kadar kalsium tinggi) atau Hipoparatiroidisme (kadar kalsium rendah).";
        },
        'tiroid-btn': () => {
            heart.classList.add('metabolism-fast');
            messageContent.textContent = "Hormon Tiroid: Mengatur metabolisme tubuh. Memengaruhi energi, suhu tubuh, dan pertumbuhan.";
            disorderInfo.textContent = "Gangguan: Hipertiroidisme (metabolisme cepat) atau Hipotiroidisme (metabolisme lambat).";
        },
        'pertumbuhan-btn': () => {
            skeleton.classList.add('growth-active');
            messageContent.textContent = "Hormon Pertumbuhan: Penting untuk pertumbuhan anak-anak dan perbaikan sel pada orang dewasa.";
            disorderInfo.textContent = "Gangguan: Gigantisme (pertumbuhan berlebihan) atau dwarfisme (pertumbuhan terhambat).";
        },
        'aldosteron-btn': () => {
            kidneys.classList.add('kidneys-active');
            messageContent.textContent = "Aldosteron: Mengontrol keseimbangan garam dan air. Mengatur tekanan darah dengan cara memengaruhi ginjal.";
            disorderInfo.textContent = "Gangguan: Hiperaldosteronisme (tekanan darah tinggi) atau Hipopaldosteronisme (tekanan darah rendah).";
        },
        'estrogen-btn': () => {
            reproductive.classList.add('reproductive-active');
            messageContent.textContent = "Estrogen: Hormon seks wanita. Mengatur siklus menstruasi dan perkembangan karakteristik wanita.";
            disorderInfo.textContent = "Gangguan: Masalah kesuburan, osteoporosis, atau gangguan mood.";
        },
        'progesteron-btn': () => {
            reproductive.classList.add('reproductive-active');
            messageContent.textContent = "Progesteron: Hormon penting untuk kehamilan. Mempersiapkan rahim untuk menerima sel telur yang dibuahi.";
            disorderInfo.textContent = "Gangguan: Masalah siklus menstruasi atau kesulitan menjaga kehamilan.";
        },
        'testosteron-btn': () => {
            reproductive.classList.add('reproductive-strong');
            messageContent.textContent = "Testosteron: Hormon seks pria. Mengatur perkembangan otot, tulang, dan karakteristik pria.";
            disorderInfo.textContent = "Gangguan: Kekurangan testosteron dapat menyebabkan penurunan libido, massa otot, dan kepadatan tulang.";
        },
    };

    // Tambahkan event listener ke semua tombol hormon
    hormoneButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            resetEffects();
            const buttonId = event.target.id;
            const action = hormoneActions[buttonId];
            if (action) {
                action();
            }
        });
    });

    // Inisialisasi awal
    messageContent.textContent = "Pilih hormon untuk memulai simulasi.";
    disorderInfo.textContent = "Informasi mengenai gangguan hormon akan muncul di sini.";
});