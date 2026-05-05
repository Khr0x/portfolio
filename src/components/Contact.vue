<script setup>
import { ref, reactive } from 'vue';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-vue-next';

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const isSubmitting = ref(false);
const submitStatus = ref({ type: null, message: '' });

async function handleSubmit() {
  isSubmitting.value = true;
  submitStatus.value = { type: null, message: '' };

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      submitStatus.value = {
        type: 'success',
        message: '¡Mensaje enviado exitosamente! Te responderé pronto.',
      };
      formData.name = '';
      formData.email = '';
      formData.subject = '';
      formData.message = '';
    } else {
      submitStatus.value = {
        type: 'error',
        message: data.error || 'Error al enviar el mensaje. Inténtalo de nuevo.',
      };
    }
  } catch (error) {
    submitStatus.value = {
      type: 'error',
      message: 'Error de conexión. Por favor, inténtalo más tarde.',
    };
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <section id="contact" class="min-h-screen flex items-center justify-center py-28 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-sm font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
          CONTACTO
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mt-6">
          ¿Tienes un proyecto en mente?
        </h2>
        <p class="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
          Hablemos sobre cómo puedo ayudarte a llevar tu idea al siguiente nivel.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <div class="space-y-8">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-lg shrink-0">
              <Mail :size="22" class="text-primary" />
            </div>
            <div>
              <h4 class="font-bold text-white">Email</h4>
              <p class="text-white/60 mt-1">cristian.mendezig@gmail.com</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-lg shrink-0">
              <Phone :size="22" class="text-primary" />
            </div>
            <div>
              <h4 class="font-bold text-white">Teléfono</h4>
              <p class="text-white/60 mt-1">+52 961 289 4846</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-lg shrink-0">
              <MapPin :size="22" class="text-primary" />
            </div>
            <div>
              <h4 class="font-bold text-white">Ubicación</h4>
              <p class="text-white/60 mt-1">Chiapas, MX</p>
            </div>
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-5">
          <div class="grid grid-cols-2 gap-4">
            <input
              v-model="formData.name"
              type="text"
              name="name"
              placeholder="Nombre"
              required
              class="w-full px-5 py-3.5 bg-white/5 border border-white/20 rounded-xl text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <input
              v-model="formData.email"
              type="email"
              name="email"
              placeholder="Email"
              required
              class="w-full px-5 py-3.5 bg-white/5 border border-white/20 rounded-xl text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
          <input
            v-model="formData.subject"
            type="text"
            name="subject"
            placeholder="Asunto"
            required
            class="w-full px-5 py-3.5 bg-white/5 border border-white/20 rounded-xl text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
          <textarea
            v-model="formData.message"
            name="message"
            rows="5"
            placeholder="Tu mensaje..."
            required
            class="w-full px-5 py-3.5 bg-white/5 border border-white/20 rounded-xl text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
          />

          <div
            v-if="submitStatus.type"
            class="flex items-center gap-2 p-4 rounded-xl"
            :class="submitStatus.type === 'success'
              ? 'bg-green-500/10 border border-green-500/20 text-green-400'
              : 'bg-red-500/10 border border-red-500/20 text-red-400'"
          >
            <CheckCircle2 v-if="submitStatus.type === 'success'" :size="20" />
            <AlertCircle v-else :size="20" />
            <span class="text-sm">{{ submitStatus.message }}</span>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-[#0A0A0A] font-bold rounded-xl hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            <template v-if="isSubmitting">
              <Loader2 :size="18" class="animate-spin" />
              Enviando...
            </template>
            <template v-else>
              Enviar mensaje <Send :size="18" />
            </template>
          </button>
        </form>
      </div>
    </div>

    <div class="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full opacity-50" />
    <div class="absolute top-1/3 right-20 w-3 h-3 bg-primary rounded-full opacity-30" />
    <div class="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary rounded-full opacity-40" />
  </section>
</template>
