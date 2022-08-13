import NewsModal from "../models/news.js";


export const Addnews = async (req, res) => {
  const newsData = req.body

  try {
    const news = await NewsModal.create({ ...newsData })


    res.status(200).json({news})
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error.message })
  }
}



//adding images to local folder

// export const Addnews = async (req, res) => {
//   const newsData = req.body

//   try {
//     const news = await NewsModal.create({ ...newsData, img: req.files })


//     res.status(200).json({news})
//   } catch (error) {
//     console.log(error);
//     res.status(401).json({ message: error.message })
//   }
// }





export const getAllNews = async(req,res) => {
  const news = await NewsModal.find({});

  if (news){
    res.status(201).json(news);
  }else{
    res.status(500).json({ message: "Something went wrong" });
  }
}

export const getSportNews= async(req,res) => {
  const news = await NewsModal.find({category: "Sport"});

  if (news){
    res.status(201).json(news);
  }else{
    res.status(500).json({ message: "Something went wrong" });
  }

}

export const getTechNews= async(req,res) => {
  const news = await NewsModal.find({category: "Tech"});

  if (news){
    res.status(201).json(news);
  }else{
    res.status(500).json({ message: "Something went wrong" });
  }

}

export const getGalleryNews= async(req,res) => {
  const news = await NewsModal.find({category: "Gallery"});

  if (news){
    res.status(201).json(news);
  }else{
    res.status(500).json({ message: "Something went wrong" });
  }
}

export const getnews= async(req,res) => {
  const news = await NewsModal.findById(req.params.id);

  if (news){
    res.status(201).json(news);
  }else{
    res.status(500).json({ message: "Something went wrong" });
  }
}


export const Updatenews = async (req, res) => {
  const news = req.body;
  const result = await NewsModal.findById(req.params.id)

  if(result){
    try {
      const updatednews = await NewsModal.findByIdAndUpdate(req.params.id, { ...news}, { new: true })
      res.status(201).json(updatednews);
    } catch (error) {
      console.log(error)
      res.status(409).json({ message: error.message })
    }
  }else{
    return res.status(404).send('No News found');
  }

}


export const Deletenews = async (req, res) => {
  const news = req.body;
  const result = await NewsModal.findById(req.params.id)

  if(result){
    try {
      const deletenews = await NewsModal.findByIdAndDelete(req.params.id)
      res.status(201).json(deletenews);
    } catch (error) {
      console.log(error)
      res.status(409).json({ message: error.message })
    }
  }else{
    return res.status(404).send('No News found');
  }

}