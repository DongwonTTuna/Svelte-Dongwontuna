<script lang="ts">
import SetBox from "./SetBox.svelte";

let programming = ["go", "rust", "html", "java", "js", "php", "python", "ts"];
  let frameworks = ["django", "react", "svelte"];
  let libraries = ["jquery"];
  let certifications = [""];


</script>

<div>
    <SetBox itemname="Programming Language" items={programming}/>
    <SetBox itemname="Frameworks" items={frameworks}/>
    <SetBox itemname="Libraries" items={libraries}/>
    <SetBox itemname="Certifications" items={certifications}/>
</div>