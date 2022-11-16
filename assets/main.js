const API =
    "https://youtube138.p.rapidapi.com/channel/videos/?id=UCQUDMMi8aVhXDZoOUq-3wDg&hl=en&gl=US";

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "8153cf75e6msh09c88f5af2fc2b9p147749jsn17b5eb86abd6",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

async function fetchData(url) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.contents
                .map(
                    video => `
        <div class="group relative">
        <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
        >
            <img src="${video.video.thumbnails[0].url}" alt="south-park videos" class="w-full" />
        </div>
        <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.video.title}
            </h3>
        </div>
    </div>`
                )
                .slice(0, 5)
                .join("")}
        `;
        document.getElementById("content").innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();
