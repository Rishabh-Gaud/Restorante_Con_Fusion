import React, { Component } from 'react';
import {Card,CardBody,CardTitle,CardText,CardImg} from 'reactstrap';


class DishDetail extends Component {
    renderComment(comments){
        if(comments==null){
            return <div></div>;
        }


        const cmnts= comments.map((comment)=>{
           return ( <li key={Comment.id}>
                <p>{comment.comment} </p>
                <p>-- {comment.author} , &nbsp;
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(comment.date))} </p>
            </li>);
        });

        
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
               <ol className="list-unstyled"> {cmnts}</ol>
            </div>

        );
    }
        renderDish(dish) {
            if (dish != null)
                return(
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    </div>
                );
            else
                return(
                    <div></div>
                );
        }
                    

    render() {
        const dish =this.props.dish;
        if(dish==null){
            return <div></div>;
        }
        const dishItem = this.renderDish(dish);
        const dishComment = this.renderComment(dish.comments);

        return (
            <div className="row">
                {dishItem}
                {dishComment}
            </div>
        )
    }
}

export default DishDetail
