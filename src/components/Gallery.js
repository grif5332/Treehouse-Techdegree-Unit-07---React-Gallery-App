import React from 'react';
import Image from '../components/Image';
import NoResults from '../components/NoResults';

// Gallery will get props from App
const Gallery = (props) => {

    let searchResult = props.data;

    if(searchResult.length > 0) {

        let resultIMG = searchResult.map(result => 
            <Image url={`https://farm${result.farm}.staticflickr.com/${result.server}/${result.id}_${result.secret}.jpg`} key={result.id} title={result.title} />)

            return (
                <ul>
                    {resultIMG}
                </ul>
            )
    } else {
        return (
            <div>
                <NoResults />
            </div>)
    }

    
}

export default Gallery;

// Info You need to know: https://www.flickr.com/services/api/misc.urls.html

// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
// https://farm5.staticflickr.com/4902/44111548090_fb7781de70.jpg
// farm:
// 5
// id:
// "44111548090"
// isfamily:
// 0
// isfriend:
// 0
// ispublic:
// 1
// owner:
// "87141190@N04"
// secret:
// "fb7781de70"
// server:
// "4902"
// title:
// "neko-neko2278"