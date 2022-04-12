import React from "react";
import HeroSm from "../../components/HeroSm/HeroSm";
import Section from "../../components/Section/Section";
import MainLayout from "../../layouts/MainLayout";

const CreateNewItem = () => {
  return (
    <MainLayout>
      <HeroSm title="Create New Item" />

      <Section id="create-item-main">
        <div className="form-wrapper">
          <div className="req-fields">
            <div className="left">
              <div>
                <div className="text-light-1 fw-bold">
                  <span className="text-red">*</span>Required Fields
                </div>

                <h2 className="my-4">
                  Image, Video, Audio, Or 3D Model
                  <span className="text-red">*</span>
                </h2>

                <div className="text-light-1">
                  File Types Supported: JPG, PNG, GIF, SVG, MP4, WEBM, WAV, OGG,
                  GLB, GLTF. MAX SIZE: 100MB
                </div>
              </div>
            </div>

            <div className="right">
              <div className="img-uploader">
                <label htmlFor="image"></label>
                <input id="image" type="file" />
              </div>
            </div>
          </div>

          <div className="sub-sec">
            <div className="custom-form-control">
              <label htmlFor="name">
                Name <span className="text-red">*</span>
              </label>
              <input type="text" placeholder="Item Name" />
            </div>
          </div>

          <div className="sub-sec">
            <h2 className="mb-3">External Links</h2>
            <p className="text-light-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              voluptatem a sequi, ea esse nemo adipisci numquam ipsa blanditiis
              debitis voluptatum vitae odit voluptate doloremque omnis officia
              eum consectetur? Corrupti?
            </p>

            <div className="custom-form-control">
              <input type="text" placeholder="Item Name" />
            </div>
          </div>

          <div className="sub-sec">
            <h2 className="mb-3">Description</h2>
            <p className="text-light-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              voluptatem a sequi, ea esse nemo adipisci numquam ipsa blanditiis
              debitis voluptatum vitae odit voluptate doloremque omnis officia
              eum consectetur? Corrupti?
            </p>

            <div className="custom-form-control">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Provide details of your item"
              ></textarea>
            </div>
          </div>

          <div className="sub-sec">
            <h2 className="mb-3">Collection</h2>
            <p className="text-light-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="settings">
              <div className="item">
                <div className="left">
                  <div className="img">
                    <img
                      className="icon"
                      src="./assets/vectors/collection-settings-props.svg"
                      alt="properties"
                    />
                  </div>
                  <div className="text">
                    <h2>Properties</h2>
                    <p className="text-light-1 mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="right">
                  <button className="btn btn-add-lg">+</button>
                </div>
              </div>
              <div className="item">
                <div className="left">
                  <div className="img">
                    <img
                      className="icon"
                      src="./assets/vectors/collection-settings-level.svg"
                      alt="properties"
                    />
                  </div>
                  <div className="text">
                    <h2>Level</h2>
                    <p className="text-light-1 mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="right">
                  <button className="btn btn-add-lg">+</button>
                </div>
              </div>
              <div className="item">
                <div className="left">
                  <div className="img">
                    <img
                      className="icon"
                      src="./assets/vectors/collection-settings-status.svg"
                      alt="properties"
                    />
                  </div>
                  <div className="text">
                    <h2>Status</h2>
                    <p className="text-light-1 mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="right">
                  <button className="btn btn-add-lg">+</button>
                </div>
              </div>
              <div className="item">
                <div className="left">
                  <div className="img">
                    <img
                      className="icon"
                      src="./assets/vectors/collection-settings-unlockable.svg"
                      alt="properties"
                    />
                  </div>
                  <div className="text">
                    <h2>Unlockable Content</h2>
                    <p className="text-light-1 mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="right">
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div className="item">
                <div className="left">
                  <div className="img">
                    <img
                      className="icon"
                      src="./assets/vectors/collection-settings-sensitive.svg"
                      alt="properties"
                    />
                  </div>
                  <div className="text">
                    <h2>Explicit &amp; Sensitive Content</h2>
                    <p className="text-light-1 mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="right">
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div className="item no-bb">
                <div className="left flex-grow-1">
                  <div className="text">
                    <h2>Supply</h2>
                    <p className="text-light-1 mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="custom-form-control">
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="item no-bb">
                <div className="left flex-grow-1">
                  <div className="text">
                    <h2>Blockchain</h2>
                    <p className="text-light-1 mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="custom-form-control">
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sub-sec">
            <h2 className="mb-3">Freeze Metadata</h2>
            <p className="text-light-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              voluptatem a sequi, ea esse nemo adipisci numquam ipsa blanditiis
              debitis voluptatum vitae odit voluptate doloremque omnis officia
              eum consectetur? Corrupti?
            </p>

            <div className="custom-form-control">
              <input
                type="text"
                placeholder="To Freeze Metadata, You Must Create Your First Item"
              />
            </div>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
};

export default CreateNewItem;
