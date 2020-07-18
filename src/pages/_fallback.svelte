<script>
  import { url } from '@sveltech/routify/runtime';
</script>

<div class="e404">
  <div class="huge">404</div>
  <div class="big">
    Page not found.
    <a href={$url('/')} class="underline text-blue-700">Go Home</a>
  </div>
</div>

<style>
  .huge {
    font-size: 12rem;
  }

  .e404 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 0%);
    text-align: center;
  }
</style>
