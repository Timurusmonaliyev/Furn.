import React from "react";
import BlogImgs from "../../assets/blog/b1.jpg";
import BlogImgs2 from "../../assets/blog/b2.jpg";
import BlogImgs3 from "../../assets/blog/b3.jpg";

const LastestBlogCard = () => {
  return (
    <div>
      <section id="blog" className="blog">
        <div className="">
          <div className="section-header flex justify-center">
            <h2 className="text-[30px] font-medium lates">Latest Blog</h2>
          </div>
          <div className="">
            <div className="grid  grid-cols-1 md:grid xl:mt-[50px] md:grid-cols-3 xl:w-[77%] md:w-[95%] md:mt-[40px] w-[88%] mt-11 lg:mt-[50px] lg:w-[93%] m-auto gap-[30px]">
              <div className="">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <img src={BlogImgs} alt="blog image" />
                    <div className="single-blog-img-overlay"></div>
                  </div>
                  <div className="single-blog-txt pt-[24px]">
                    <h2>
                      <a className="text-[16px] blogtxt" href="#">
                        Why Brands are Looking at Local Language
                      </a>
                    </h2>
                    <h3 className="mt-4">
                      By{" "}
                      <a className="text-[14px] rob" href="#">
                        Robert Norby
                      </a>{" "}
                      / 18th March 2018
                    </h3>
                    <p className="text-[20px] robtxt">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt....
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <img src={BlogImgs} alt="blog image" />
                    <div className="single-blog-img-overlay"></div>
                  </div>
                  <div className="single-blog-txt pt-[24px]">
                    <h2>
                      <a className="text-[16px] blogtxt" href="#">
                        Why Brands are Looking at Local Language
                      </a>
                    </h2>
                    <h3 className="mt-4">
                      By{" "}
                      <a className="text-[14px] rob" href="#">
                        Robert Norby
                      </a>{" "}
                      / 18th March 2018
                    </h3>
                    <p className="text-[20px] robtxt">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt....
                    </p>
                  </div>
                </div>
              </div>
              <div className=" ">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <img src={BlogImgs} alt="blog image" />
                    <div className="single-blog-img-overlay"></div>
                  </div>
                  <div className="single-blog-txt pt-[24px]">
                    <h2>
                      <a className="text-[16px] blogtxt" href="#">
                        Why Brands are Looking at Local Language
                      </a>
                    </h2>
                    <h3 className="mt-4">
                      By{" "}
                      <a className="text-[14px] rob" href="#">
                        Robert Norby
                      </a>{" "}
                      / 18th March 2018
                    </h3>
                    <p className="text-[20px] robtxt">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt....
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LastestBlogCard;
