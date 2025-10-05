 // JavaScript code remains the same as previous version
    let eliminatedPlayers = new Set();

    function toggleElimination(inputId) {
      const input = document.getElementById(inputId);
      const playerName = input.value.trim();
      
      if (!playerName) {
        alert('Harap isi nama player terlebih dahulu!');
        return;
      }

      if (eliminatedPlayers.has(playerName)) {
        eliminatedPlayers.delete(playerName);
        input.classList.remove('eliminated');
        updateEliminatedList();
        showNotification(`🔄 ${playerName} dikembalikan ke permainan`);
      } else {
        eliminatedPlayers.add(playerName);
        input.classList.add('eliminated');
        updateEliminatedList();
        showNotification(`🚫 ${playerName} ditandai sebagai tereliminasi`);
      }
      
      if (areAllInputsFilled()) {
        generateAllRoundsPrediction();
      }
    }

    function areAllInputsFilled() {
      const fields = ["p2","p3","p4","p5","p6","p7","p8","p9"];
      return fields.every(id => document.getElementById(id).value.trim());
    }

    function updateEliminatedList() {
      const eliminatedSection = document.getElementById('eliminated-section');
      const eliminatedList = document.getElementById('eliminated-list');
      
      if (eliminatedPlayers.size > 0) {
        eliminatedSection.style.display = 'block';
        eliminatedList.innerHTML = '';
        eliminatedPlayers.forEach(player => {
          const span = document.createElement('span');
          span.className = 'eliminated-player';
          span.textContent = player;
          span.onclick = () => {
            eliminatedPlayers.delete(player);
            document.querySelectorAll('input').forEach(input => {
              if (input.value.trim() === player) {
                input.classList.remove('eliminated');
              }
            });
            updateEliminatedList();
            if (areAllInputsFilled()) {
              generateAllRoundsPrediction();
            }
          };
          eliminatedList.appendChild(span);
        });
      } else {
        eliminatedSection.style.display = 'none';
      }
    }

    function showNotification(message) {
      const notification = document.createElement('div');
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: var(--text-dark);
        padding: 12px 16px;
        border-radius: var(--border-radius);
        z-index: 1000;
        font-weight: 600;
        box-shadow: var(--shadow);
        animation: fadeIn 0.3s ease;
      `;
      notification.textContent = message;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 2000);
    }

    function generateAllRoundsPrediction() {
      const fields = ["p2","p3","p4","p5","p6","p7","p8","p9"];
      let allFilled = true;

      for (let id of fields) {
        if (!document.getElementById(id).value.trim()) {
          allFilled = false;
          break;
        }
      }

      if (!allFilled) {
        alert("⚠️ Harap isi semua kolom lawan (I-2 sampai II-6) sebelum generate prediksi! ⚠️");
        document.getElementById("jadwal").innerHTML = "";
        return;
      }

      const originalOpponents = {
        "I2": document.getElementById("p2").value.trim(),
        "I3": document.getElementById("p3").value.trim(),
        "I4": document.getElementById("p4").value.trim(),
        "II1": document.getElementById("p5").value.trim(),
        "II2": document.getElementById("p6").value.trim(),
        "II4": document.getElementById("p7").value.trim(),
        "II5": document.getElementById("p8").value.trim(),
        "II6": document.getElementById("p9").value.trim()
      };

      const allPredictions = calculateAllRoundsPredictions(originalOpponents);
      
      let html = '';
      
      html += `<div class="accuracy-note">
        <b>🎯 PREDIKSI SEMUA RONDE - SISTEM DINAMIS</b><br>
        ${eliminatedPlayers.size > 0 ? 
          `🚫 ${eliminatedPlayers.size} player tereliminasi - Sistem otomatis mengganti dengan player aktif` : 
          'Semua player masih aktif'}
      </div>`;

      const rounds = ['III', 'IV', 'V', 'VI', 'VII', 'VIII'];
      
      rounds.forEach(round => {
        const predictions = allPredictions[round];
        
        html += `<div class="round-container">`;
        html += `<h2>🎮 RONDE ${round}</h2>`;
        html += `<div class="table-container">`;
        html += `<table><tr><th>Step</th><th>Lawan</th><th>Status</th><th>Keterangan Pola</th></tr>`;
        
        predictions.forEach(pred => {
          let statusClass = 'status-active';
          let statusText = '🎯 Aktif';
          
          if (pred.opponent === 'Creep') {
            statusClass = 'status-active';
            statusText = '👾 Creep';
          } else if (pred.isReplacement) {
            statusClass = 'status-replacement';
            statusText = '🔄 Pengganti';
          }
          
          html += `<tr>
            <td>${pred.step}</td>
            <td><b>${pred.opponent}</b></td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            <td>${pred.pattern}${pred.isReplacement ? `<br><small class="eliminated">(ganti ${pred.replacedPlayer})</small>` : ''}</td>
          </tr>`;
        });
        html += `</table></div></div>`;
      });

      if (allPredictions.replacements.length > 0) {
        html += `<div class="summary-box">`;
        html += `<p><b>📊 RINGKASAN PERUBAHAN:</b></p>`;
        html += `<p>Total <span class="highlight">${allPredictions.replacements.length} penggantian</span> dilakukan karena eliminasi player</p>`;
        
        const replacementMap = {};
        allPredictions.replacements.forEach(rep => {
          if (!replacementMap[rep.original]) {
            replacementMap[rep.original] = [];
          }
          replacementMap[rep.original].push(rep);
        });
        
        Object.keys(replacementMap).forEach(originalPlayer => {
          const replacements = replacementMap[originalPlayer];
          html += `<p><span class="eliminated">${originalPlayer}</span> → <span class="replacement">${replacements[0].replacement}</span> (${replacements.length}x diganti)</p>`;
        });
        
        html += `</div>`;
      }

      if (eliminatedPlayers.size > 0) {
        const activePlayers = Object.values(originalOpponents)
          .filter(player => !eliminatedPlayers.has(player));
        
        html += `<div class="info-box">`;
        html += `<p><b>💡 STRATEGI BERDASARKAN ELIMINASI:</b></p>`;
        html += `<p>• <span class="highlight">${eliminatedPlayers.size} player tereliminasi</span>, ${activePlayers.length} player aktif</p>`;
        html += `<p>• Fokus pada lawan aktif: <span class="highlight">${activePlayers.join(', ')}</span></p>`;
        html += `<p>• Player tereliminasi otomatis diganti dalam perhitungan matchmaking</p>`;
        html += `</div>`;
      }

      document.getElementById("jadwal").innerHTML = html;
    }

    function calculateAllRoundsPredictions(originalOpponents) {
      const activePlayers = Object.values(originalOpponents)
        .filter(player => !eliminatedPlayers.has(player));
      
      const replacements = [];
      
      function getReplacementPlayer(originalPlayer, position) {
        if (!eliminatedPlayers.has(originalPlayer)) {
          return { opponent: originalPlayer, isReplacement: false };
        }
        
        const activeIndex = replacements.length % activePlayers.length;
        const replacement = activePlayers[activeIndex] || "Tidak ada player aktif";
        
        replacements.push({ original: originalPlayer, replacement: replacement, position: position });
        
        return { opponent: replacement, isReplacement: true, replacedPlayer: originalPlayer };
      }

      const basePatternIII = [
        { step: '1', original: originalOpponents.I3, pattern: `Dari I-3` },
        { step: '2', original: originalOpponents.I4, pattern: `Dari I-4` },
        { step: '3', original: 'Creep', pattern: 'PvE Stage' },
        { step: '4', original: originalOpponents.II1, pattern: `Dari II-1` },
        { step: '5', original: originalOpponents.II2, pattern: `Dari II-2` },
        { step: '6', original: originalOpponents.II4, pattern: `Dari II-4` },
        { step: '7', original: originalOpponents.II5, pattern: `Dari II-5` }
      ];

      const basePatternIV = [
        { step: '1', original: originalOpponents.II6, pattern: `Dari II-6` },
        { step: '2', original: originalOpponents.I2, pattern: `Dari I-2` },
        { step: '3', original: 'Creep', pattern: 'PvE Stage' },
        { step: '4', original: originalOpponents.I3, pattern: `Geser dari III-1` },
        { step: '5', original: originalOpponents.I4, pattern: `Geser dari III-2` },
        { step: '6', original: originalOpponents.II1, pattern: `Geser dari III-4` },
        { step: '7', original: originalOpponents.II2, pattern: `Geser dari III-5` }
      ];

      const basePatternV = [
        { step: '1', original: originalOpponents.II4, pattern: `Geser dari III-6` },
        { step: '2', original: originalOpponents.II5, pattern: `Geser dari III-7` },
        { step: '3', original: 'Creep', pattern: 'PvE Stage' },
        { step: '4', original: originalOpponents.II6, pattern: `Geser dari IV-1` },
        { step: '5', original: originalOpponents.I2, pattern: `Geser dari IV-2` },
        { step: '6', original: originalOpponents.I3, pattern: `Geser dari IV-4` },
        { step: '7', original: originalOpponents.I4, pattern: `Geser dari IV-5` }
      ];

      const basePatternVI = [
        { step: '1', original: originalOpponents.II1, pattern: `Geser dari IV-6` },
        { step: '2', original: originalOpponents.II2, pattern: `Geser dari IV-7` },
        { step: '3', original: 'Creep', pattern: 'PvE Stage' },
        { step: '4', original: originalOpponents.II4, pattern: `Geser dari V-1` },
        { step: '5', original: originalOpponents.II5, pattern: `Geser dari V-2` },
        { step: '6', original: originalOpponents.II6, pattern: `Geser dari V-4` },
        { step: '7', original: originalOpponents.I2, pattern: `Geser dari V-5` }
      ];

      const basePatternVII = [
        { step: '1', original: originalOpponents.I3, pattern: `Geser dari V-6` },
        { step: '2', original: originalOpponents.I4, pattern: `Geser dari V-7` },
        { step: '3', original: 'Creep', pattern: 'PvE Stage' },
        { step: '4', original: originalOpponents.II1, pattern: `Geser dari VI-1` },
        { step: '5', original: originalOpponents.II2, pattern: `Geser dari VI-2` },
        { step: '6', original: originalOpponents.II4, pattern: `Geser dari VI-4` },
        { step: '7', original: originalOpponents.II5, pattern: `Geser dari VI-5` }
      ];

      const basePatternVIII = [
        { step: '1', original: originalOpponents.II6, pattern: `Geser dari VI-6` },
        { step: '2', original: originalOpponents.I2, pattern: `Geser dari VI-7` },
        { step: '3', original: 'Creep', pattern: 'PvE Stage' },
        { step: '4', original: originalOpponents.I3, pattern: `Geser dari VII-1` },
        { step: '5', original: originalOpponents.I4, pattern: `Geser dari VII-2` },
        { step: '6', original: originalOpponents.II1, pattern: `Geser dari VII-4` },
        { step: '7', original: originalOpponents.II2, pattern: `Geser dari VII-5` }
      ];

      function createPredictions(basePattern, roundName) {
        return basePattern.map(item => {
          if (item.original === 'Creep') {
            return { step: `${roundName}-${item.step}`, opponent: 'Creep', isReplacement: false, pattern: item.pattern };
          }
          
          const replacement = getReplacementPlayer(item.original, `${roundName}-${item.step}`);
          return {
            step: `${roundName}-${item.step}`,
            opponent: replacement.opponent,
            isReplacement: replacement.isReplacement,
            pattern: item.pattern,
            replacedPlayer: replacement.replacedPlayer
          };
        });
      }

      return {
        III: createPredictions(basePatternIII, 'III'),
        IV: createPredictions(basePatternIV, 'IV'),
        V: createPredictions(basePatternV, 'V'),
        VI: createPredictions(basePatternVI, 'VI'),
        VII: createPredictions(basePatternVII, 'VII'),
        VIII: createPredictions(basePatternVIII, 'VIII'),
        replacements: replacements
      };
    }

    function resetAll() {
      if (confirm("Yakin ingin mereset semua input dan eliminasi?")) {
        const inputs = document.querySelectorAll("input[type='text']");
        inputs.forEach(input => {
          input.value = "";
          input.classList.remove('eliminated');
        });
        eliminatedPlayers.clear();
        updateEliminatedList();
        document.getElementById("jadwal").innerHTML = "";
      }
    }

    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('p2').focus();
    });