import { Container } from "@mui/system";
import { FC, useEffect } from "react";

import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Footer from "../Footer";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  isLoadingReviews,
  getReviews,
  setNewName,
  setNewRating,
  setNewReview,
  postReview,
} from "../../app/slices/reviewsSlice";
import { fieldInputAlert, validateAlert } from "../../app/slices/alertsSlice";

import "./Reviews.scss";

const Reviews: FC = () => {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector((store) => store.reviews.reviews);
  const loadingReviews = useAppSelector(
    (state) => state.reviews.loadingReviews
  );
  const newRating = useAppSelector((store) => store.reviews.newRating);
  const newName = useAppSelector((store) => store.reviews.newName);
  const newReview = useAppSelector((store) => store.reviews.newReview);

  const validate = () => {
    if (!newName.length || !newReview.length) {
      dispatch(fieldInputAlert(true));
      return;
    }
    if (newName.length < 3 || newReview.length < 50) {
      dispatch(validateAlert(true));
      return;
    }
    dispatch(setNewName(""));
    dispatch(setNewReview(""));
    dispatch(setNewRating(4));
    dispatch(
      postReview({
        id: reviews.length + 1,
        name: newName,
        grade: newRating,
        date: new Date().toLocaleDateString(),
        body: newReview,
      })
    );
    dispatch(isLoadingReviews());
  };
  useEffect(() => {
    dispatch(getReviews());
    dispatch(isLoadingReviews());
  }, [loadingReviews]);

  useEffect(() => {
    dispatch(getReviews());
  }, []);

  return (
    <section className="reviews">
      <Container>
        <h1 className="title">Отзывы</h1>
        {loadingReviews && <div className="loader"></div>}
        {!loadingReviews && (
          <>
            <div className="rewievs__statistic">
              <h2></h2>
              <h2></h2>
            </div>
            <ul className="reviews__list">
              {reviews.map((el) => {
                return (
                  <li key={el.id} className="reviews__list-item">
                    <h4>{el.name}</h4>
                    <Rating
                      style={{ zIndex: "-1" }}
                      name="simple-controlled"
                      readOnly
                      value={el.grade}
                    />
                    <p>{el.body}</p>
                    <p>{el.date}</p>
                  </li>
                );
              })}
            </ul>
            <div className="reviews__form">
              <h2 className="title">Оставить отзыв</h2>
              <TextField
                label="Имя"
                onChange={(e) => dispatch(setNewName(e.target.value))}
                value={newName}
              />
              <Rating
                name="simple-controlled"
                value={newRating}
                onChange={(event, newValue) => {
                  dispatch(setNewRating(newValue as number));
                }}
              />
              <TextField
                label="Отзыв"
                multiline
                minRows={5}
                onChange={(e) => dispatch(setNewReview(e.target.value))}
                value={newReview}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(validate);
                }}
                className="button"
              >
                Опубликовать
              </button>
            </div>
          </>
        )}
      </Container>
      {!loadingReviews && <Footer />}
    </section>
  );
};

export default Reviews;
