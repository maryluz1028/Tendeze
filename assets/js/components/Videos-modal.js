export  function videosOpenModal(modalVideos,elementOpenModal,btnCloseModal,containerVideos){
    const $modal=document.getElementById(modalVideos);
    const $videoContainer=document.querySelector(`.${modalVideos} .video `);
    const $video=document.createElement('video');

    document.addEventListener('click',(e)=>{
        if(e.target.matches(elementOpenModal)){
            const $videoUrl=e.target.dataset.video;
            if($videoUrl!=''){
                $modal.classList.add('active');
                $video.setAttribute('src',$videoUrl);
                $video.setAttribute('controls','');
                $video.setAttribute('autoplay',true)
                $videoContainer.appendChild($video);
            }
        }
        if(e.target.matches(btnCloseModal) || e.target.matches(containerVideos)){
            $modal.classList.remove('active');
            $video.removeAttribute('src');
            $videoContainer.removeChild($video);

        }
    })
}

