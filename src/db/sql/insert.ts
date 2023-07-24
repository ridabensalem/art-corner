async function run (){
    try{
      const user = await User.create({ name: 'rida', email: 'silva@gmail.com', password: '123', likes: [], comments: []});
      const post = await Post.create({title: 'United shapes', content: 'First Post', comments: [], likes: []});
      const comment = await Comments.create({user_id: user._id, post_id: post._id, content: 'I love it ', createdAt: new Date(), updatedAt: new Date()});
      const like = await Likes.create({user_id: user._id, post_id: post._id, createdAt: new Date(), updatedAt: new Date()});
      console.log(user, post, comment, like);
    }
    catch(error){
      console.log(error);
    }
  
  }
  run();