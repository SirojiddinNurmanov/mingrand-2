import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductV2 = () => {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const { t, i18n } = useTranslation();

    return (
        <div className="product-area pd-top-118 pd-bottom-90 go-top">
            <div className="container">
                <div className="section-title text-center">
                    <h6> {t(`popular_product.h6`)}</h6>
                    <h2>{t(`popular_product.h2`)}</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-category-product-wrap">
                            <div className="thumb">
                                <img
                                    src={
                                        publicUrl +
                                        "assets/img/product/cat-1.png"
                                    }
                                    alt="img"
                                />
                            </div>
                            <div className="single-category-product-details">
                                <h4>
                                    <Link to="/property-details">Orchard</Link>
                                </h4>
                                <Link className="btn btn-base" to="/property">
                                    3 Porparties
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-category-product-wrap">
                            <div className="thumb">
                                <img
                                    src={
                                        publicUrl +
                                        "assets/img/product/cat-2.png"
                                    }
                                    alt="img"
                                />
                            </div>
                            <div className="single-category-product-details">
                                <h4>
                                    <Link to="/property-details">
                                        Rose Cottage
                                    </Link>
                                </h4>
                                <Link className="btn btn-base" to="/property">
                                    6 Porparties
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-category-product-wrap">
                            <div className="thumb">
                                <img
                                    src={
                                        publicUrl +
                                        "assets/img/product/cat-3.png"
                                    }
                                    alt="img"
                                />
                            </div>
                            <div className="single-category-product-details">
                                <h4>
                                    <Link to="/property-details">Ong Barn</Link>
                                </h4>
                                <Link className="btn btn-base" to="/property">
                                    2 Porparties
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 order-lg-12">
                        <div className="single-category-product-wrap">
                            <div className="thumb">
                                <img
                                    src={
                                        publicUrl +
                                        "assets/img/product/cat-5.png"
                                    }
                                    alt="img"
                                />
                            </div>
                            <div className="single-category-product-details">
                                <h4>
                                    <Link to="/property-details">
                                        Family House
                                    </Link>
                                </h4>
                                <Link className="btn btn-base" to="/property">
                                    1 Porparties
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 order-lg-1">
                        <div className="single-category-product-wrap">
                            <div className="thumb">
                                <img
                                    src={
                                        publicUrl +
                                        "assets/img/product/cat-4.png"
                                    }
                                    alt="img"
                                />
                            </div>
                            <div className="single-category-product-details">
                                <h4>
                                    <Link to="/property-details">
                                        Beach House
                                    </Link>
                                </h4>
                                <Link className="btn btn-base" to="/property">
                                    7 Porparties
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductV2;
