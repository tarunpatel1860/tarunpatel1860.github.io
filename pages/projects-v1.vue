<template>
  <div class="projects-v1">
    <div class="projects-v1__container">
      <template v-for="(project, index) in projects">
        <section
          :key="'container' + index"
          class="project-card"
          :class="{ left: index % 2 === 0 }"
        >
          <div class="project-card__content">
            <div class="content__image-container">
              <div class="content__image-container__middle">
                <img :src="base64" alt="" />
              </div>
            </div>
            <article class="content__text-container">
              <h1 class="content__text-container--head color-primary mb-5">
                <span class="color-secondary"> 0{{ index + 1 }}</span>
                <span
                  class="color-secondary"
                  :class="{ 'mr-2': index % 2 == 0, 'ml-2': index % 2 !== 0 }"
                  >.</span
                >
                {{ project.title }}
              </h1>
              <p class="content__text-container--description mb-4">
                {{ project.description }}
              </p>
              <div class="content__text-container--tech mb-3 color-primary">
                <span v-for="(tech, i) in project.techs" :key="i">
                  {{ tech }}
                </span>
              </div>
              <div class="content__text-container--actions">
                <i class="icon-github"></i>
                <i class="icon-github"></i>
              </div>
            </article>
          </div>
        </section>
        <div
          v-if="index < projects.length - 1"
          :key="'filler' + index"
          class="filler"
        ></div>
      </template>
    </div>
  </div>
</template>

<script>
import projects from '~/assets/scripts/projects'
import base64 from '~/assets/scripts/image-base64'
export default {
  data() {
    return {
      projects,
      base64,
    }
  },
}
</script>
