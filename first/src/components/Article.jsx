import './css/Article.css';

export const Article = ({title, text}) =>
    <article className="article">
        <h3>{title}</h3>
        <p>{text}</p>
    </article>;

export default Article;