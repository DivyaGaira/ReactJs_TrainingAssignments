function Image()
{
    let imageArray  =  [
        './Images/img1.jpg',
        './Images/img2.jpg',
        './Images/img3.jpg',
        './Images/img4.jpg'	
            
        ];

    let resultsArray = imageArray.map((imageUrl) => (
        <img width="100" key={imageUrl} src={imageUrl} alt="Image" />
    ))

    return (
    <>
        <table>
            <li>{resultsArray}</li>
        </table>
        
    
  
    </>);
}

export default Image;