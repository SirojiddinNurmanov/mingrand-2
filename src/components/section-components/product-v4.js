import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ProductV4 = () => {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const { t, i18n } = useTranslation();
    return (
        <div className="product-area pd-top-118 pd-bottom-120 go-top">
            <div className="container">
                <div className="section-title text-center">
                    <h6>{t(`product.subtitle`)}</h6>
                    <h2>{t(`product.title`)}</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-product-wrap">
                            <div className="thumb">
                                <img
                                    src={publicUrl + "assets/img/project/8.png"}
                                    alt="img"
                                />
                                <div className="btn-area">
                                    <Link
                                        className="btn btn-base btn-sm"
                                        to="/property"
                                    >
                                        BUY
                                    </Link>
                                    <Link
                                        className="btn btn-base btn-sm"
                                        to="/property"
                                    >
                                        RENT
                                    </Link>
                                </div>
                            </div>
                            <div className="product-wrap-details">
                                <div className="media">
                                    <div className="media-body">
                                        <h5>
                                            <Link to="/property-details">
                                                $ 80,650.00
                                            </Link>
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consecte
                                        </p>
                                    </div>
                                    <a className="fav-btn float-right" href="#">
                                        <i className="far fa-heart" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-product-wrap">
                            <div className="thumb">
                                <img
                                    src={publicUrl + "assets/img/project/4.png"}
                                    alt="img"
                                />
                                <div className="btn-area">
                                    <Link
                                        className="btn btn-base btn-sm"
                                        to="/property"
                                    >
                                        BUY
                                    </Link>
                                    <Link
                                        className="btn btn-base btn-sm"
                                        to="/property"
                                    >
                                        RENT
                                    </Link>
                                </div>
                            </div>
                            <div className="product-wrap-details">
                                <div className="media">
                                    <div className="media-body">
                                        <h5>
                                            <Link to="/property-details">
                                                $ 70,650.00
                                            </Link>
                                        </h5>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <a className="fav-btn float-right" href="#">
                                        <i className="far fa-heart" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-product-wrap">
                            <div className="thumb">
                                <img
                                    src={publicUrl + "assets/img/project/7.png"}
                                    alt="img"
                                />
                                <div className="btn-area">
                                    <Link
                                        className="btn btn-base btn-sm"
                                        to="/property"
                                    >
                                        BUY
                                    </Link>
                                    <Link
                                        className="btn btn-base btn-sm"
                                        to="/property"
                                    >
                                        RENT
                                    </Link>
                                </div>
                            </div>
                            <div className="product-wrap-details">
                                <div className="media">
                                    <div className="media-body">
                                        <h5>
                                            <Link to="/property-details">
                                                $ 40,650.00
                                            </Link>
                                        </h5>
                                        <p>
                                            <img
                                                src={
                                                    publicUrl +
                                                    "assets/img/icon/location-alt.png"
                                                }
                                                alt="img"
                                            />
                                            New York real estate{" "}
                                        </p>
                                    </div>
                                    <a className="fav-btn float-right" href="#">
                                        <i className="far fa-heart" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-product-wrap">
                            <div className="thumb">
                                <img
                                    src={publicUrl + "assets/img/project/5.png"}
                                    alt="img"
                                />
                                <div className="btn-area">
                                    <Link
                                        className="btn btn-base btn-sm"
                                        to="/property"
                                    >
                                        BUY
                                    </Link>
                                    <Link
                                        className="btn btn-base btn-sm"
                                        to="/property"
                                    >
                                        RENT
                                    </Link>
                                </div>
                            </div>
                            <div className="product-wrap-details">
                                <div className="media">
                                    <div className="media-body">
                                        <h5>
                                            <Link to="/property-details">
                                                $ 76,650.00
                                            </Link>
                                        </h5>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <a className="fav-btn float-right" href="#">
                                        <i className="far fa-heart" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-product-wrap">
                            <div className="thumb">
                                <img
                                    src={publicUrl + "assets/img/project/9.png"}
                                    alt="img"
                                />
                                <div className="btn-area">
                                    <Link
                                        className="btn btn-base btn-sm"
                                        to="/property"
                                    >
                                        BUY
                                    </Link>
                                    <Link
                                        className="btn btn-base btn-sm"
                                        to="/property"
                                    >
                                        RENT
                                    </Link>
                                </div>
                            </div>
                            <div className="product-wrap-details">
                                <div className="media">
                                    <div className="media-body">
                                        <h5>
                                            <Link to="/property-details">
                                                $ 79,650.00
                                            </Link>
                                        </h5>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <a className="fav-btn float-right" href="#">
                                        <i className="far fa-heart" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-product-wrap">
                            <div className="thumb">
                                <img
                                    src={publicUrl + "assets/img/project/4.png"}
                                    alt="img"
                                />
                                <div className="btn-area">
                                    <Link
                                        className="btn btn-base btn-sm"
                                        to="/property"
                                    >
                                        BUY
                                    </Link>
                                    <Link
                                        className="btn btn-base btn-sm"
                                        to="/property"
                                    >
                                        RENT
                                    </Link>
                                </div>
                            </div>
                            <div className="product-wrap-details">
                                <div className="media">
                                    <div className="media-body">
                                        <h5>
                                            <Link to="/property-details">
                                                $ 90,650.00
                                            </Link>
                                        </h5>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <a className="fav-btn float-right" href="#">
                                        <i className="far fa-heart" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="btn-wrap text-center mt-4">
                            <Link className="btn btn-base" to="/property">
                                {t(`product.more`)}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductV4;
