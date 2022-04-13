import React from "react";
import HeroSm from "../../components/HeroSm/HeroSm";
import Section from "../../components/Section/Section";
import Select from "../../components/Select/select";
import Option from "../../components/Select/option";
import MainLayout from "../../layouts/MainLayout";

const CreateNewItem = () => {
  return (
    <MainLayout>
      <HeroSm title="Create New Item" />

      <Section id="create-item-main">
        <div className="form-wrapper">
          <div className="req-fields gap-5">
            <div className="left">
              <div>
                <div className="text-light-1 fw-bold">
                  <span className="text-red">*</span>Required Fields
                </div>

                <h4 className="my-4">
                  Image, Video, Audio, Or 3D Model
                  <span className="text-red">*</span>
                </h4>

                <div className="text-light-1 fs-16 lh-15">
                  File Types Supported: JPG, PNG, GIF, SVG, MP4, WEBM, WAV, OGG,
                  GLB, GLTF. MAX SIZE: 100MB
                </div>
              </div>
            </div>

            <div className="right">
              <div className="img-uploader">
                <label htmlFor="image">
                  <img
                    className="upload"
                    src="./assets/vectors/upload-placeholder.svg"
                    alt="upload"
                  />
                </label>
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
            <h4 className="mb-3">External Links</h4>
            <p className="text-light-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              voluptatem a sequi, ea esse nemo adipisci numquam ipsa blanditiis
              debitis voluptatum vitae odit voluptate doloremque omnis officia
              eum consectetur? Corrupti?
            </p>

            <div className="custom-form-control">
              <input type="text" placeholder="www.dummy.com" />
            </div>
          </div>

          <div className="sub-sec">
            <h4 className="mb-3">Description</h4>
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

          <div className="sub-sec mb-0">
            <h4 className="mb-3">Collection</h4>
            <p className="text-light-1 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <Select
              icon="./assets/vectors/select-round-icon.svg"
              placeholder="United Collection #215557776"
            >
              <Option value="United Collection #215557776">
                United Collection #215557776
              </Option>
            </Select>

            <div className="settings">
              <div className="item active">
                <div className="item-left">
                  <div className="img">
                    <img
                      className="icon"
                      src="./assets/vectors/collection-settings-props.svg"
                      alt="properties"
                    />
                  </div>
                  <div className="text">
                    <h4>Properties</h4>
                    <p className="text-light-1 mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="item-right">
                  <button className="btn btn-add-lg">+</button>
                </div>
              </div>
              <div className="item">
                <div className="item-left">
                  <div className="img">
                    <img
                      className="icon"
                      src="./assets/vectors/collection-settings-level.svg"
                      alt="properties"
                    />
                  </div>
                  <div className="text">
                    <h4>Level</h4>
                    <p className="text-light-1 mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="item-right">
                  <button className="btn btn-add-lg">+</button>
                </div>
              </div>
              <div className="item">
                <div className="item-left">
                  <div className="img">
                    <img
                      className="icon"
                      src="./assets/vectors/collection-settings-status.svg"
                      alt="properties"
                    />
                  </div>
                  <div className="text">
                    <h4>Status</h4>
                    <p className="text-light-1 mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="item-right">
                  <button className="btn btn-add-lg">+</button>
                </div>
              </div>
              <div className="item">
                <div className="item-left">
                  <div className="img">
                    <img
                      className="icon"
                      src="./assets/vectors/collection-settings-unlockable.svg"
                      alt="properties"
                    />
                  </div>
                  <div className="text">
                    <h4>Unlockable Content</h4>
                    <p className="text-light-1 mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="item-right">
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div className="item">
                <div className="item-left">
                  <div className="img">
                    <img
                      className="icon"
                      src="./assets/vectors/collection-settings-sensitive.svg"
                      alt="properties"
                    />
                  </div>
                  <div className="text">
                    <h4>Explicit &amp; Sensitive Content</h4>
                    <p className="text-light-1 mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="item-right">
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div className="item d-block no-bb">
                <div className="item-left d-block">
                  <div className="text">
                    <h4>Supply</h4>
                    <p className="text-light-1 mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="custom-form-control">
                      <input type="text" placeholder="01" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="item no-bb d-block">
                <div className="item-left flex-grow-1 d-block">
                  <div className="text">
                    <h4>Blockchain</h4>
                    <p className="text-light-1 my-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    <Select
                      placeholder="Ethereum"
                      icon="./assets/vectors/select-eth-icon.svg"
                    >
                      <Option value="Ethereum">Ethereum</Option>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sub-sec">
            <h4 className="mb-3">Freeze Metadata</h4>
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

            <div className="p-3 px-5 btn btn-primary" style={{ opacity: 0.5 }}>
              Create
            </div>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
};

export default CreateNewItem;
