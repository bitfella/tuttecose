import Post from 'App/Models/Post'

export default class PostsController {
  public async index({ response }) {
    const posts = await Post.all()

    return response.ok(posts)
  }
}
