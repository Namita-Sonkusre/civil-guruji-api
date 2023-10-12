import React from "react";
import { Slide } from "react-awesome-reveal";
import { useNavigation } from "react-router-dom";

export default function CourseCarousel({
  title,
  hideBtn,
  categoryId,
  parentCourseId,
  parentPackageId,
  isDetail,
  userId,
}) {
  const router = useNavigation();

  const handleViewAll = async () => {
    try {
      if (categoryId) {
        router.push(`/courses/${categoryId}`);
      }
      if (parentCourseId) {
        router.push(`/courses/similar/${parentCourseId}`);
      }
      if (parentPackageId) {
        router.push(`/packages/similar/${parentPackageId}`);
      }
      if (userId) {
        router.push(`/courses/purchased-courses/${userId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Slide direction="up" triggerOnce={true}>
      <div className={` w-full px-0 mx-0 mt-[40px] `}>
        <div className="flex justify-between items-center my-[20px]">
          <h3 className="text-[20px] font-[600]">{title}</h3>
          {!hideBtn ? (
            <button onClick={handleViewAll} style={{ color: "#DE076E" }}>
              View All
            </button>
          ) : null}
        </div>
      </div>
    </Slide>
  );
}
