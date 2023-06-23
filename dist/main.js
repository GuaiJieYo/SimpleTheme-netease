(() => {
  // src/script/theme.ts
  function WatchAnimation() {
    function UpAndDown(el, mode) {
      const element = document.querySelector(el)?.classList;
      if (mode === 1) {
        element?.add("Up2Top");
      } else if (mode === 2) {
        element?.remove("Up2Top");
      }
    }
    const up = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement && node.classList.contains("g-single")) {
            UpAndDown(".better-ncm-manager", 1);
            UpAndDown(".g-sd", 1);
            UpAndDown(".g-mn", 1);
            UpAndDown(".g-ft", 1);
            UpAndDown(".user", 1);
            up.disconnect();
            down.observe(document.querySelector(".g-single"), { attributes: true });
          }
        }
      }
    });
    const down = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (!mutation.target.classList.contains("z-show")) {
          UpAndDown(".better-ncm-manager", 2);
          UpAndDown(".g-sd", 2);
          UpAndDown(".g-mn", 2);
          UpAndDown(".g-ft", 2);
          UpAndDown(".user", 2);
          up.observe(document.body, { childList: true });
          down.disconnect();
        }
      }
    });
    up.observe(document.body, { childList: true });
  }

  // src/main.ts
  plugin.onLoad(async () => {
    const Style = document.createElement("style");
    Style.id = "STStyle";
    Style.innerHTML = await betterncm.fs.readFileText(GetFilePath() + "/main.css");
    document.head.append(Style);
    WatchAnimation();
  });
  function GetFilePath() {
    var path = plugin.pluginPath;
    if (betterncm.fs.exists(plugin.filePath + "/dist")) {
      path += "/dist";
    }
    return path;
  }
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3NjcmlwdC90aGVtZS50cyIsICIuLi9zcmMvbWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGZ1bmN0aW9uIFdhdGNoQW5pbWF0aW9uKCkge1xyXG4gIGZ1bmN0aW9uIFVwQW5kRG93bihlbDogc3RyaW5nLCBtb2RlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKT8uY2xhc3NMaXN0O1xyXG4gICAgaWYgKG1vZGUgPT09IDEpIHtcclxuICAgICAgZWxlbWVudD8uYWRkKFwiVXAyVG9wXCIpO1xyXG4gICAgfSBlbHNlIGlmIChtb2RlID09PSAyKSB7XHJcbiAgICAgIGVsZW1lbnQ/LnJlbW92ZShcIlVwMlRvcFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFx1NEUwQVx1NTM0N1xyXG4gIGNvbnN0IHVwID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uczogYW55KSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xyXG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgbXV0YXRpb24uYWRkZWROb2Rlcykge1xyXG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJnLXNpbmdsZVwiKSkge1xyXG4gICAgICAgICAgVXBBbmREb3duKFwiLmJldHRlci1uY20tbWFuYWdlclwiLCAxKTtcclxuICAgICAgICAgIFVwQW5kRG93bihcIi5nLXNkXCIsIDEpO1xyXG4gICAgICAgICAgVXBBbmREb3duKFwiLmctbW5cIiwgMSk7XHJcbiAgICAgICAgICBVcEFuZERvd24oXCIuZy1mdFwiLCAxKTtcclxuICAgICAgICAgIFVwQW5kRG93bihcIi51c2VyXCIsIDEpO1xyXG4gICAgICAgICAgdXAuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgZG93bi5vYnNlcnZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZy1zaW5nbGVcIiksIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gXHU0RTBCXHU4NDNEXHJcbiAgY29uc3QgZG93biA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnM6IGFueSkgPT4ge1xyXG4gICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcclxuICAgICAgaWYgKCFtdXRhdGlvbi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiei1zaG93XCIpKSB7XHJcbiAgICAgICAgVXBBbmREb3duKFwiLmJldHRlci1uY20tbWFuYWdlclwiLCAyKTtcclxuICAgICAgICBVcEFuZERvd24oXCIuZy1zZFwiLCAyKTtcclxuICAgICAgICBVcEFuZERvd24oXCIuZy1tblwiLCAyKTtcclxuICAgICAgICBVcEFuZERvd24oXCIuZy1mdFwiLCAyKTtcclxuICAgICAgICBVcEFuZERvd24oXCIudXNlclwiLCAyKTtcclxuICAgICAgICB1cC5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xyXG4gICAgICAgIGRvd24uZGlzY29ubmVjdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHVwLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XHJcbn0iLCAiaW1wb3J0IHsgV2F0Y2hBbmltYXRpb24gfSBmcm9tICcuL3NjcmlwdC90aGVtZSdcclxuaW1wb3J0ICcuL3N0eWxlcy90aGVtZS5jc3MnXHJcblxyXG5wbHVnaW4ub25Mb2FkKGFzeW5jICgpPT57XHJcbiAgICAvLyBcdTZDRThcdTUxNjVcdTY4MzdcdTVGMEZcclxuICAgIGNvbnN0IFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxyXG4gICAgU3R5bGUuaWQgPSAnU1RTdHlsZSdcclxuICAgIFN0eWxlLmlubmVySFRNTCA9IGF3YWl0IGJldHRlcm5jbS5mcy5yZWFkRmlsZVRleHQoR2V0RmlsZVBhdGgoKSArICcvbWFpbi5jc3MnKVxyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQoU3R5bGUpXHJcblxyXG4gICAgLy8gXHU1RjAwXHU1NDJGXHU3NkQxXHU1NDJDXHU1MkE4XHU3NTNCXHJcbiAgICBXYXRjaEFuaW1hdGlvbigpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBHZXRGaWxlUGF0aCgpIHtcclxuICAgIHZhciBwYXRoID0gcGx1Z2luLnBsdWdpblBhdGhcclxuICAgIGlmIChiZXR0ZXJuY20uZnMuZXhpc3RzKHBsdWdpbi5maWxlUGF0aCArICcvZGlzdCcpKSB7XHJcbiAgICAgICAgcGF0aCArPSAnL2Rpc3QnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aFxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjs7QUFBTyxXQUFTLGlCQUFpQjtBQUMvQixhQUFTLFVBQVUsSUFBWSxNQUFvQjtBQUNqRCxZQUFNLFVBQVUsU0FBUyxjQUFjLEVBQUUsR0FBRztBQUM1QyxVQUFJLFNBQVMsR0FBRztBQUNkLGlCQUFTLElBQUksUUFBUTtBQUFBLE1BQ3ZCLFdBQVcsU0FBUyxHQUFHO0FBQ3JCLGlCQUFTLE9BQU8sUUFBUTtBQUFBLE1BQzFCO0FBQUEsSUFDRjtBQUdBLFVBQU0sS0FBSyxJQUFJLGlCQUFpQixDQUFDLGNBQW1CO0FBQ2xELGlCQUFXLFlBQVksV0FBVztBQUNoQyxtQkFBVyxRQUFRLFNBQVMsWUFBWTtBQUN0QyxjQUFJLGdCQUFnQixlQUFlLEtBQUssVUFBVSxTQUFTLFVBQVUsR0FBRztBQUN0RSxzQkFBVSx1QkFBdUIsQ0FBQztBQUNsQyxzQkFBVSxTQUFTLENBQUM7QUFDcEIsc0JBQVUsU0FBUyxDQUFDO0FBQ3BCLHNCQUFVLFNBQVMsQ0FBQztBQUNwQixzQkFBVSxTQUFTLENBQUM7QUFDcEIsZUFBRyxXQUFXO0FBQ2QsaUJBQUssUUFBUSxTQUFTLGNBQWMsV0FBVyxHQUFHLEVBQUUsWUFBWSxLQUFLLENBQUM7QUFBQSxVQUN4RTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBR0QsVUFBTSxPQUFPLElBQUksaUJBQWlCLENBQUMsY0FBbUI7QUFDcEQsaUJBQVcsWUFBWSxXQUFXO0FBQ2hDLFlBQUksQ0FBQyxTQUFTLE9BQU8sVUFBVSxTQUFTLFFBQVEsR0FBRztBQUNqRCxvQkFBVSx1QkFBdUIsQ0FBQztBQUNsQyxvQkFBVSxTQUFTLENBQUM7QUFDcEIsb0JBQVUsU0FBUyxDQUFDO0FBQ3BCLG9CQUFVLFNBQVMsQ0FBQztBQUNwQixvQkFBVSxTQUFTLENBQUM7QUFDcEIsYUFBRyxRQUFRLFNBQVMsTUFBTSxFQUFFLFdBQVcsS0FBSyxDQUFDO0FBQzdDLGVBQUssV0FBVztBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUVELE9BQUcsUUFBUSxTQUFTLE1BQU0sRUFBRSxXQUFXLEtBQUssQ0FBQztBQUFBLEVBQy9DOzs7QUN4Q0EsU0FBTyxPQUFPLFlBQVU7QUFFcEIsVUFBTSxRQUFRLFNBQVMsY0FBYyxPQUFPO0FBQzVDLFVBQU0sS0FBSztBQUNYLFVBQU0sWUFBWSxNQUFNLFVBQVUsR0FBRyxhQUFhLFlBQVksSUFBSSxXQUFXO0FBQzdFLGFBQVMsS0FBSyxPQUFPLEtBQUs7QUFHMUIsbUJBQWU7QUFBQSxFQUNuQixDQUFDO0FBRUQsV0FBUyxjQUFjO0FBQ25CLFFBQUksT0FBTyxPQUFPO0FBQ2xCLFFBQUksVUFBVSxHQUFHLE9BQU8sT0FBTyxXQUFXLE9BQU8sR0FBRztBQUNoRCxjQUFRO0FBQUEsSUFDWjtBQUNBLFdBQU87QUFBQSxFQUNYOyIsCiAgIm5hbWVzIjogW10KfQo=
