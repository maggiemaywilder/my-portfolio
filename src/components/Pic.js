

const Pic = ({ pic, alt }) => {
    return (
        <div   >
            <img className='rounded' id='myPic' src={pic} alt={alt}/>
        </div>
    )
}

export default Pic
