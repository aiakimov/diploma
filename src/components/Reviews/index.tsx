import { Container } from "@mui/system";
import { FC, useEffect } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Footer from "../Footer";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getThisPageOfReviews,
  setCurrentPage,
  isLoadingNewReviews,
  getTotalCountReviews,
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
  const loadingNewReviews = useAppSelector(
    (state) => state.reviews.loadingNewReviews
  );
  const newRating = useAppSelector((store) => store.reviews.newRating);
  const newName = useAppSelector((store) => store.reviews.newName);
  const newReview = useAppSelector((store) => store.reviews.newReview);
  const total = useAppSelector((store) => store.reviews.countReviews);
  const currentPage = useAppSelector((store) => store.reviews.currentPage);

  const validate = () => {
    if (!newName.length || !newReview.length) {
      dispatch(fieldInputAlert(true));
      return;
    }
    if (newName.length < 3 || newReview.length < 30) {
      dispatch(validateAlert(true));
      return;
    }
    dispatch(setNewName(""));
    dispatch(setNewReview(""));
    dispatch(setNewRating(4));
    dispatch(
      postReview({
        id: Number(total) + 1,
        name: newName,
        grade: newRating,
        date: new Date().toLocaleDateString(),
        body: newReview,
      })
    );
    dispatch(isLoadingNewReviews());
  };

  useEffect(() => {
    if (loadingNewReviews) {
      dispatch(getThisPageOfReviews(String(Math.ceil(Number(total) / 5))));
      dispatch(getTotalCountReviews());
    }
  }, [loadingNewReviews]);

  useEffect(() => {
    dispatch(getThisPageOfReviews("1"));
    dispatch(getTotalCountReviews());
  }, []);

  useEffect(() => {
    dispatch(getThisPageOfReviews(currentPage));
  }, [currentPage]);

  const changePage = (e: React.ChangeEvent<any>) => {
    dispatch(setCurrentPage(e.target.innerText));
  };

  return (
    <motion.div
      className="contacts"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0 },
      }}
    >
      <section className="reviews">
        <Container>
          <h1 className="title">Отзывы</h1>

          {loadingReviews && <div className="loader"></div>}
          {!loadingReviews && (
            <>
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0 },
                }}
                className="reviews__list"
              >
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
              </motion.ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0 },
                }}
              >
                <Stack
                  className="pagination"
                  spacing={2}
                  style={{
                    alignItems: "center",
                    margin: "20px 0",
                  }}
                >
                  <Pagination
                    page={+currentPage}
                    onChange={(e) => changePage(e)}
                    count={Math.ceil(Number(total) / 5)}
                    renderItem={(item) => (
                      <PaginationItem
                        components={{
                          previous: ArrowBackIcon,
                          next: ArrowForwardIcon,
                        }}
                        {...item}
                      />
                    )}
                  />
                </Stack>
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
              </motion.div>
            </>
          )}
        </Container>
        {!loadingReviews && <Footer />}
      </section>
    </motion.div>
  );
};

export default Reviews;
