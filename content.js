'use strict';

// https://www.nnn.ed.nico/courses/{courseId}/chapters/{chapterId}/{resourceType}/{sectionId}
const regexp = new RegExp(String.raw`^https://www\.nnn\.ed\.nico/courses/(?<courseId>\d+)/chapters/(?<chapterId>\d+)/(?<resourceType>\w+)/(?<sectionId>\d+)`);
const matches = location.href.match(regexp);

if (matches) {
  const { courseId, chapterId, sectionId, resourceType } = matches.groups;

  switch (resourceType) {
    case 'movie':
      location.href = `/contents/movies/${sectionId}`;
      break;
    case 'guide':
      location.href = `/contents/guides/${sectionId}`;
      break;
    case 'exercise':
      location.href = `/contents/exercises/${sectionId}`;
      break;
  }
}
