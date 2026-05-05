<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Menu, X } from 'lucide-vue-next';

const navLinks = [
  { label: 'Resumen', href: '#hero' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Portafolio', href: '#projects' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Contacto', href: '#contact' },
];

const isOpen = ref(false);
const activeSection = ref('#hero');

let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = `#${entry.target.id}`;
        }
      });
    },
    { threshold: 0.3 }
  );

  const sections = document.querySelectorAll('section[id]');
  sections.forEach((section) => observer.observe(section));
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

function closeMenu() {
  isOpen.value = false;
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#hero" class="flex items-center gap-3 text-lg font-bold group">
        <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors">
          <div class="w-full h-full bg-linear-to-br from-primary to-primary/60 flex items-center justify-center text-[#0A0A0A] font-extrabold text-sm">
            CM
          </div>
        </div>
        <div>
          <div class="text-white">Cristian Mendez</div>
          <div class="text-primary text-xs font-normal">SOFTWARE ENGINEER</div>
        </div>
      </a>

      <ul class="hidden lg:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="text-sm font-medium transition-colors"
            :class="activeSection === link.href ? 'text-primary' : 'text-white/60 hover:text-white'"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <a
        href="#contact"
        class="hidden lg:flex bg-primary text-[#0A0A0A] hover:bg-primary/90 font-semibold rounded-full px-8 py-5 text-sm transition-colors"
      >
        Contrátame
      </a>

      <button
        class="lg:hidden rounded-full bg-primary/10 text-primary hover:bg-primary/20 p-2 transition-colors"
        @click="isOpen = !isOpen"
      >
        <X :size="20" v-if="isOpen" />
        <Menu :size="20" v-else />
      </button>
    </div>

    <div v-if="isOpen" class="lg:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/5 px-6 pb-6">
      <ul class="flex flex-col gap-4 pt-4">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            @click="closeMenu"
            class="text-base font-medium transition-colors"
            :class="activeSection === link.href ? 'text-primary' : 'text-white/80 hover:text-primary'"
          >
            {{ link.label }}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            @click="closeMenu"
            class="block w-full text-center bg-primary text-[#0A0A0A] hover:bg-primary/90 font-semibold rounded-full px-8 py-5 transition-colors"
          >
            Contrátame
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
